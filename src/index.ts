import parseCli from './cli';
import VodApi from './api';

async function videoNft() {
	const args = await parseCli();
	const api = new VodApi(args.apiHost, args.apiToken as string);

	console.log('1. Requesting upload URL... ');
	const {
		url: uploadUrl,
		asset,
		task: importTask
	} = await api.requestUploadUrl(args.assetName);
	console.log(`Pending asset with id=${asset.id}`);

	console.log('2. Uploading file...');
	await api.uploadFile(uploadUrl, args.filename as string);
	await api.waitTask(importTask);

	console.log('3. Starting export... ');
	let { task: exportTask } = await api.exportAsset(
		asset.id ?? '',
		JSON.parse(args.nftMetadata)
	);
	console.log(`Created export task with id=${exportTask.id}`);
	exportTask = await api.waitTask(exportTask);

	const result = exportTask.output?.export?.ipfs;
	console.log(
		`4. Export successful! Result: \n${JSON.stringify(result, null, 2)}`
	);

	if (args.mintNft) {
		console.log(
			`5. Mint your NFT at:\n` +
				`https://livepeer-com-git-vg-feateth-tx-page-livepeer.vercel.app/transact/eth?tokenUri=${result?.nftMetadataUrl}`
		);
	}
}

videoNft().catch(err => {
	console.error(err);
	process.exit(1);
});
