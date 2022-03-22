/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * LMPS ffmpeg profile
 */
export interface FfmpegProfile {
	width: number;
	name: string;
	height: number;
	bitrate: number;
	fps: number;
	fpsDen?: number;
	gop?: string;
	profile?: 'H264Baseline' | 'H264Main' | 'H264High' | 'H264ConstrainedHigh';
	encoder?: 'h264' | 'hevc' | 'vp8' | 'vp9';
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Fields names taken from log format description https://support.highwinds.com/hc/en-us/articles/360052181571-Raw-Log-Access-through-GCS
 */
export interface CdnDataRow {
	/**
	 * Session UUID. Used in recordings URLs.
	 */
	stream_id?: string;
	/**
	 * Playback ID.
	 */
	playback_id?: string;
	/**
	 * Number of unique IP addresses of clients. Not accurate because StackPath zeroes last part of the IP address.
	 */
	unique_client_ips: number;
	/**
	 * Size of the asset being delivered.
	 */
	total_filesize?: number;
	/**
	 * The total size of the request header.
	 */
	total_cs_bytes?: number;
	/**
	 * Total bytes in the response to the client.
	 */
	total_sc_bytes: number;
	/**
	 * Number of parsed log lines
	 */
	count?: number;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type CdnDataPayload = {
	region: string;
	file_name: string;
	date: number;
	data: [CdnDataRow, ...CdnDataRow[]];
}[];

/**
 * Fields names taken from log format description https://support.highwinds.com/hc/en-us/articles/360052181571-Raw-Log-Access-through-GCS
 */
export interface CdnDataRow {
	/**
	 * Session UUID. Used in recordings URLs.
	 */
	stream_id?: string;
	/**
	 * Playback ID.
	 */
	playback_id?: string;
	/**
	 * Number of unique IP addresses of clients. Not accurate because StackPath zeroes last part of the IP address.
	 */
	unique_client_ips: number;
	/**
	 * Size of the asset being delivered.
	 */
	total_filesize?: number;
	/**
	 * The total size of the request header.
	 */
	total_cs_bytes?: number;
	/**
	 * Total bytes in the response to the client.
	 */
	total_sc_bytes: number;
	/**
	 * Number of parsed log lines
	 */
	count?: number;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CdnUsageLast {
	id?: string;
	fileName: number;
	region: string;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Webhook {
	id?: string;
	kind?: string;
	name: string;
	userId?: string;
	/**
	 * Timestamp (in milliseconds) at which stream object was created
	 */
	createdAt?: number;
	/**
	 * @deprecated Non-persisted field. To be used on creation API only.
	 */
	event?:
		| 'stream.started'
		| 'stream.detection'
		| 'stream.idle'
		| 'recording.ready'
		| 'recording.started'
		| 'recording.waiting'
		| 'multistream.connected'
		| 'multistream.error'
		| 'multistream.disconnected';
	events?: (
		| 'stream.started'
		| 'stream.detection'
		| 'stream.idle'
		| 'recording.ready'
		| 'recording.started'
		| 'recording.waiting'
		| 'multistream.connected'
		| 'multistream.error'
		| 'multistream.disconnected'
	)[];
	url: string;
	deleted?: boolean;
	/**
	 * shared secret used to sign the webhook payload
	 */
	sharedSecret?: string;
	/**
	 * status of webhook
	 */
	status?: {
		/**
		 * failure timestamp and error message with status code
		 */
		lastFailure?: {
			/**
			 * Timestamp (in milliseconds) at which the webhook last failed
			 */
			timestamp?: number;
			/**
			 * Webhook failure error message
			 */
			error?: string;
			/**
			 * Webhook failure response
			 */
			response?: string;
			/**
			 * Webhook failure status code
			 */
			statusCode?: number;
			[k: string]: unknown;
		};
		/**
		 * Timestamp (in milliseconds) at which the webhook last was triggered
		 */
		lastTriggeredAt?: number;
		[k: string]: unknown;
	};
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface WebhookResponse {
	id?: string;
	kind?: string;
	webhookId: string;
	eventId: string;
	/**
	 * Timestamp (in milliseconds) at which webhook response object was created
	 */
	createdAt?: number;
	duration?: number;
	statusCode: number;
	response?: {
		body?: string;
		headers?: {
			[k: string]: string[];
		};
		redirected?: boolean;
		status?: number;
		statusText?: string;
	};
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface DetectionWebhookPayload {
	manifestID: string;
	seqNo: number;
	sceneClassification: {
		name: string;
		probability: number;
		[k: string]: unknown;
	}[];
	[k: string]: unknown;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Stream {
	id?: string;
	kind?: string;
	name: string;
	userId?: string;
	lastSeen?: number;
	sourceSegments?: number;
	transcodedSegments?: number;
	/**
	 * Duration of all the source segments, sec
	 */
	sourceSegmentsDuration?: number;
	/**
	 * Duration of all the transcoded segments, sec
	 */
	transcodedSegmentsDuration?: number;
	sourceBytes?: number;
	transcodedBytes?: number;
	/**
	 * Rate at which sourceBytes increases (bytes/second)
	 */
	ingestRate?: number;
	/**
	 * Rate at which transcodedBytes increases (bytes/second)
	 */
	outgoingRate?: number;
	/**
	 * Set to true when stream deleted
	 */
	deleted?: boolean;
	/**
	 * If currently active
	 */
	isActive?: boolean;
	/**
	 * Name of the token used to create this object
	 */
	createdByTokenName?: string;
	createdByTokenId?: string;
	/**
	 * Timestamp (in milliseconds) at which stream object was created
	 */
	createdAt?: number;
	/**
	 * Points to parent stream object
	 */
	parentId?: string;
	/**
	 * Indicates that this is not final object of `user's` session
	 */
	partialSession?: boolean;
	/**
	 * Ids of the previous sessions which are part of `user's` session
	 */
	previousSessions?: string[];
	/**
	 * Used to form RTMP ingest URL
	 */
	streamKey?: string;
	/**
	 * Used to form playback URL
	 */
	playbackId?: string;
	profiles?: FfmpegProfile[];
	objectStoreId?: string;
	presets?: (
		| 'P720p60fps16x9'
		| 'P720p30fps16x9'
		| 'P720p30fps4x3'
		| 'P576p30fps16x9'
		| 'P360p30fps16x9'
		| 'P360p30fps4x3'
		| 'P240p30fps16x9'
		| 'P240p30fps4x3'
		| 'P144p30fps16x9'
	)[];
	/**
	 * Should this stream be recorded? Uses default settings. For more customization, create and configure an object store.
	 */
	record?: boolean;
	/**
	 * ID of object store where to which this stream was recorded
	 */
	recordObjectStoreId?: string;
	multistream?: {
		/**
		 * References to targets where this stream will be simultaneously streamed to
		 */
		targets?: {
			/**
			 * Name of transcoding profile that should be sent. Use "source" for pushing source stream data
			 */
			profile: string;
			/**
			 * If true, the stream audio will be muted and only silent video will be pushed to the target.
			 */
			videoOnly?: boolean;
			/**
			 * ID of multistream target object where to push this stream
			 */
			id?: string;
			/**
			 * Inline multistream target object. Will automatically create the target resource to be used by the created stream.
			 */
			spec?: {
				name?: string;
				/**
				 * Livepeer-compatible multistream target URL (RTMP(S) or SRT)
				 */
				url: string;
			};
		}[];
	};
	wowza?: {
		transcoderAppConfig: {
			[k: string]: unknown;
		};
		transcoderTemplateAppConfig: {
			[k: string]: unknown;
		};
		streamNameGroups: unknown[];
		sourceInfo: {
			width: number;
			height: number;
			fps: number;
		};
	};
	renditions?: {
		[k: string]: string;
	};
	/**
	 * Custom configuration for audio/video detection algorithms to be run on the stream. If no config is provided and a webhook is subscribed to the stream.detection event, a default config will be used.
	 */
	detection?: {
		sceneClassification: [
			{
				name: 'soccer' | 'adult';
			},
			...{
				name: 'soccer' | 'adult';
			}[]
		];
	};
	/**
	 * Region in which this session object was created
	 */
	region?: string;
	/**
	 * Hostname of the broadcaster that transcodes that stream
	 */
	broadcasterHost?: string;
	/**
	 * Hostname of the Mist server that processes that stream
	 */
	mistHost?: string;
	/**
	 * If currently suspended
	 */
	suspended?: boolean;
}
/**
 * LMPS ffmpeg profile
 */
export interface FfmpegProfile {
	width: number;
	name: string;
	height: number;
	bitrate: number;
	fps: number;
	fpsDen?: number;
	gop?: string;
	profile?: 'H264Baseline' | 'H264Main' | 'H264High' | 'H264ConstrainedHigh';
	encoder?: 'h264' | 'hevc' | 'vp8' | 'vp9';
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface DeactivateManyPayload {
	ids?: [string, ...string[]];
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface StreamPatchPayload {
	/**
	 * Should this stream be recorded? Uses default settings. For more customization, create and configure an object store.
	 */
	record?: boolean;
	/**
	 * If currently suspended
	 */
	suspended?: boolean;
	multistream?: {
		/**
		 * References to targets where this stream will be simultaneously streamed to
		 */
		targets?: {
			/**
			 * Name of transcoding profile that should be sent. Use "source" for pushing source stream data
			 */
			profile: string;
			/**
			 * If true, the stream audio will be muted and only silent video will be pushed to the target.
			 */
			videoOnly?: boolean;
			/**
			 * ID of multistream target object where to push this stream
			 */
			id?: string;
			/**
			 * Inline multistream target object. Will automatically create the target resource to be used by the created stream.
			 */
			spec?: {
				name?: string;
				/**
				 * Livepeer-compatible multistream target URL (RTMP(S) or SRT)
				 */
				url: string;
			};
		}[];
	};
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface MultistreamTargetPatchPayload {
	id?: string;
	name?: string;
	/**
	 * Livepeer-compatible multistream target URL (RTMP(S) or SRT)
	 */
	url?: string;
	/**
	 * If true then this multistream target will not be used for pushing even if it is configured in a stream object.
	 */
	disabled?: boolean;
	userId?: string;
	/**
	 * Timestamp (in milliseconds) at which multistream target object was created
	 */
	createdAt?: number;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Session {
	id?: string;
	kind?: string;
	name: string;
	userId?: string;
	lastSeen?: number;
	sourceSegments?: number;
	transcodedSegments?: number;
	/**
	 * Duration of all the source segments, sec
	 */
	sourceSegmentsDuration?: number;
	/**
	 * Duration of all the transcoded segments, sec
	 */
	transcodedSegmentsDuration?: number;
	sourceBytes?: number;
	transcodedBytes?: number;
	/**
	 * Rate at which sourceBytes increases (bytes/second)
	 */
	ingestRate?: number;
	/**
	 * Rate at which transcodedBytes increases (bytes/second)
	 */
	outgoingRate?: number;
	/**
	 * Set to true when stream deleted
	 */
	deleted?: boolean;
	/**
	 * Timestamp (in milliseconds) at which stream object was created
	 */
	createdAt?: number;
	/**
	 * Points to parent stream object
	 */
	parentId?: string;
	/**
	 * Should this stream be recorded? Uses default settings. For more customization, create and configure an object store.
	 */
	record?: boolean;
	/**
	 * Status of the recording process of this stream session.
	 */
	recordingStatus?: 'waiting' | 'ready';
	/**
	 * URL for accessing the recording of this stream session.
	 */
	recordingUrl?: string;
	/**
	 * URL for the stream session recording packaged in an mp4.
	 */
	mp4Url?: string;
	/**
	 * ID of object store where to which this stream was recorded
	 */
	recordObjectStoreId?: string;
	/**
	 * Used to form playback URL
	 */
	playbackId?: string;
	profiles?: FfmpegProfile[];
	lastSessionId?: string;
}
/**
 * LMPS ffmpeg profile
 */
export interface FfmpegProfile {
	width: number;
	name: string;
	height: number;
	bitrate: number;
	fps: number;
	fpsDen?: number;
	gop?: string;
	profile?: 'H264Baseline' | 'H264Main' | 'H264High' | 'H264ConstrainedHigh';
	encoder?: 'h264' | 'hevc' | 'vp8' | 'vp9';
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Error {
	errors: [string, ...string[]];
	[k: string]: unknown;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ObjectStore {
	/**
	 * Livepeer-compatible object store URL
	 */
	url: string;
	/**
	 * Public URL at which data in this object storage can be accessed
	 */
	publicUrl?: string;
	/**
	 * If true then these object store will not be used for recording even if it is configured in the API command line.
	 */
	disabled?: boolean;
	id?: string;
	userId?: string;
	name?: string;
	/**
	 * Timestamp (in milliseconds) at which object store object was created
	 */
	createdAt?: number;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface MultistreamTarget {
	id?: string;
	name?: string;
	/**
	 * Livepeer-compatible multistream target URL (RTMP(S) or SRT)
	 */
	url: string;
	/**
	 * If true then this multistream target will not be used for pushing even if it is configured in a stream object.
	 */
	disabled?: boolean;
	userId?: string;
	/**
	 * Timestamp (in milliseconds) at which multistream target object was created
	 */
	createdAt?: number;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Asset {
	id: string;
	/**
	 * Type of the asset.
	 */
	type?: 'video' | 'audio';
	/**
	 * Used to form playback URL and storage folder
	 */
	playbackId?: string;
	/**
	 * URL to manually download the asset if desired
	 */
	downloadUrl?: string;
	/**
	 * owner of the asset
	 */
	userId?: string;
	/**
	 * Set to true when the asset is deleted
	 */
	deleted?: boolean;
	/**
	 * Object store ID where the asset is stored
	 */
	objectStoreId?: string;
	/**
	 * Name of the asset. This is not necessarily the filename, can be a custom name or title
	 */
	name: string;
	/**
	 * User input metadata associated with the asset
	 */
	meta?: {
		[k: string]: string;
	};
	/**
	 * Timestamp (in milliseconds) at which the asset was last updated
	 */
	updatedAt?: number;
	/**
	 * Timestamp (in milliseconds) at which asset was created
	 */
	createdAt?: number;
	/**
	 * Size of the asset in bytes
	 */
	size?: number;
	/**
	 * Hash of the asset
	 */
	hash?: {
		/**
		 * Hash of the asset
		 */
		hash?: string;
		/**
		 * Hash algorithm used to compute the hash
		 */
		algorithm?: string;
	}[];
	/**
	 * Video metadata
	 */
	videoSpec?: {
		/**
		 * Format of the asset
		 */
		format?: string;
		/**
		 * Duration of the asset in seconds (float)
		 */
		duration?: number;
		/**
		 * Bitrate of the video in bits per second
		 */
		bitrate?: number;
		/**
		 * List of tracks associated with the asset when the format contemplates them (e.g. mp4)
		 */
		tracks?: {
			/**
			 * type of track
			 */
			type: 'video' | 'audio';
			/**
			 * Codec of the track
			 */
			codec: string;
			/**
			 * Start time of the track in seconds
			 */
			startTime?: number;
			/**
			 * Duration of the track in seconds
			 */
			duration?: number;
			/**
			 * Bitrate of the track in bits per second
			 */
			bitrate?: number;
			/**
			 * Width of the track - only for video tracks
			 */
			width?: number;
			/**
			 * Height of the track - only for video tracks
			 */
			height?: number;
			/**
			 * Pixel format of the track - only for video tracks
			 */
			pixelFormat?: string;
			/**
			 * Frame rate of the track - only for video tracks
			 */
			fps?: number;
			/**
			 * Amount of audio channels in the track
			 */
			channels?: number;
			/**
			 * Sample rate of the track in samples per second - only for audio tracks
			 */
			sampleRate?: number;
			/**
			 * Bit depth of the track - only for audio tracks
			 */
			bitDepth?: number;
		}[];
	};
	/**
	 * Status of the asset
	 */
	status?: 'waiting' | 'ready' | 'failed';
	/**
	 * ID of the source asset (root) - If missing, this is a root asset
	 */
	sourceAssetId?: string;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface NewAssetPayload {
	/**
	 * Object store ID where the asset is stored
	 */
	objectStoreId?: string;
	/**
	 * Name of the asset. This is not necessarily the filename, can be a custom name or title
	 */
	name: string;
	/**
	 * User input metadata associated with the asset
	 */
	meta?: {
		[k: string]: string;
	};
	/**
	 * URL where the asset contents can be retrieved. Only valid for the import task endpoint.
	 */
	url?: string;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface NewTranscodePayload {
	/**
	 * ID of the asset to transcode
	 */
	assetId: string;
	/**
	 * Object store ID where the asset is stored
	 */
	objectStoreId?: string;
	/**
	 * Name of the asset. This is not necessarily the filename, can be a custom name or title
	 */
	name: string;
	profile: FfmpegProfile;
	[k: string]: unknown;
}
/**
 * LMPS ffmpeg profile
 */
export interface FfmpegProfile {
	width: number;
	name: string;
	height: number;
	bitrate: number;
	fps: number;
	fpsDen?: number;
	gop?: string;
	profile?: 'H264Baseline' | 'H264Main' | 'H264High' | 'H264ConstrainedHigh';
	encoder?: 'h264' | 'hevc' | 'vp8' | 'vp9';
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Task {
	/**
	 * Task ID
	 */
	id: string;
	/**
	 * User ID of the task owner
	 */
	userId?: string;
	/**
	 * Type of the task
	 */
	type?: 'import' | 'export' | 'transcode';
	/**
	 * Timestamp (in milliseconds) at which task was created
	 */
	createdAt?: number;
	/**
	 * Set to true when the task is deleted
	 */
	deleted?: boolean;
	/**
	 * ID of the input asset
	 */
	inputAssetId?: string;
	/**
	 * ID of the output asset
	 */
	outputAssetId?: string;
	/**
	 * Parameters of the task
	 */
	params?: {
		/**
		 * Parameters for the import task
		 */
		import?: {
			/**
			 * URL of the asset to import
			 */
			url?: string;
			/**
			 * S3 object key of the uploaded asset
			 */
			uploadedObjectKey?: string;
		};
		/**
		 * Parameters for the export task
		 */
		export?:
			| {
					/**
					 * custom URL parameters for the export task
					 */
					custom: {
						/**
						 * URL where to export the asset
						 */
						url: string;
						/**
						 * Method to use on the export request
						 */
						method?: string;
						/**
						 * Headers to add to the export request
						 */
						headers?: {
							[k: string]: string;
						};
					};
			  }
			| {
					ipfs: {
						/**
						 * Custom credentials for the Piñata service. Must have either a JWT or an API key and an API secret.
						 */
						pinata?:
							| {
									/**
									 * Will be added to the Authorization header as a Bearer token.
									 */
									jwt: string;
							  }
							| {
									/**
									 * Will be added to the pinata_api_key header.
									 */
									apiKey: string;
									/**
									 * Will be added to the pinata_secret_api_key header.
									 */
									apiSecret: string;
							  };
						/**
						 * Additional data to add to the NFT metadata exported to IPFS. Will be deep merged with the default metadata exported.
						 */
						nftMetadata?: {
							[k: string]: unknown;
						};
					};
			  };
		/**
		 * Parameters for the transcode task
		 */
		transcode?: {
			profile?: FfmpegProfile;
		};
	};
	/**
	 * Status of the task
	 */
	status?: {
		/**
		 * Phase of the task
		 */
		phase?:
			| 'pending'
			| 'waiting'
			| 'running'
			| 'failed'
			| 'completed'
			| 'cancelled';
		/**
		 * Timestamp (in milliseconds) at which task was updated
		 */
		updatedAt?: number;
		/**
		 * Current progress of the task in a 0-100 percentage
		 */
		progress?: number;
		/**
		 * Error message if the task failed
		 */
		errorMessage?: string;
	};
	/**
	 * Output of the task
	 */
	output?: {
		/**
		 * Output of the import task
		 */
		import?: {
			videoFilePath?: string;
			metadataFilePath?: string;
			assetSpec?: Asset;
			[k: string]: unknown;
		};
		/**
		 * Output of the export task
		 */
		export?: {
			ipfs?: {
				/**
				 * IPFS CID of the exported video file
				 */
				videoFileCid: string;
				/**
				 * URL for the file with the IPFS protocol
				 */
				videoFileUrl?: string;
				/**
				 * URL to access file via HTTP through an IPFS gateway
				 */
				videoFileGatewayUrl?: string;
				/**
				 * IPFS CID of the default metadata exported for the video
				 */
				nftMetadataCid?: string;
				/**
				 * URL for the metadata file with the IPFS protocol
				 */
				nftMetadataUrl?: string;
				/**
				 * URL to access metadata file via HTTP through an IPFS gateway
				 */
				nftMetadataGatewayUrl?: string;
			};
		};
		transcode?: {
			asset?: {
				videoFilePath?: string;
				metadataFilePath?: string;
				assetSpec?: {
					id?: string;
					/**
					 * Type of the asset.
					 */
					type?: 'video' | 'audio';
					/**
					 * Used to form playback URL and storage folder
					 */
					playbackId?: string;
					/**
					 * URL to manually download the asset if desired
					 */
					downloadUrl?: string;
					/**
					 * owner of the asset
					 */
					userId?: string;
					/**
					 * Set to true when the asset is deleted
					 */
					deleted?: boolean;
					/**
					 * Object store ID where the asset is stored
					 */
					objectStoreId?: string;
					/**
					 * Name of the asset. This is not necessarily the filename, can be a custom name or title
					 */
					name: string;
					/**
					 * User input metadata associated with the asset
					 */
					meta?: {
						[k: string]: string;
					};
					/**
					 * Timestamp (in milliseconds) at which the asset was last updated
					 */
					updatedAt?: number;
					/**
					 * Timestamp (in milliseconds) at which asset was created
					 */
					createdAt?: number;
					/**
					 * Size of the asset in bytes
					 */
					size?: number;
					/**
					 * Hash of the asset
					 */
					hash?: {
						/**
						 * Hash of the asset
						 */
						hash?: string;
						/**
						 * Hash algorithm used to compute the hash
						 */
						algorithm?: string;
					}[];
					/**
					 * Video metadata
					 */
					videoSpec?: {
						/**
						 * Format of the asset
						 */
						format?: string;
						/**
						 * Duration of the asset in seconds (float)
						 */
						duration?: number;
						/**
						 * Bitrate of the video in bits per second
						 */
						bitrate?: number;
						/**
						 * List of tracks associated with the asset when the format contemplates them (e.g. mp4)
						 */
						tracks?: {
							/**
							 * type of track
							 */
							type: 'video' | 'audio';
							/**
							 * Codec of the track
							 */
							codec: string;
							/**
							 * Start time of the track in seconds
							 */
							startTime?: number;
							/**
							 * Duration of the track in seconds
							 */
							duration?: number;
							/**
							 * Bitrate of the track in bits per second
							 */
							bitrate?: number;
							/**
							 * Width of the track - only for video tracks
							 */
							width?: number;
							/**
							 * Height of the track - only for video tracks
							 */
							height?: number;
							/**
							 * Pixel format of the track - only for video tracks
							 */
							pixelFormat?: string;
							/**
							 * Frame rate of the track - only for video tracks
							 */
							fps?: number;
							/**
							 * Amount of audio channels in the track
							 */
							channels?: number;
							/**
							 * Sample rate of the track in samples per second - only for audio tracks
							 */
							sampleRate?: number;
							/**
							 * Bit depth of the track - only for audio tracks
							 */
							bitDepth?: number;
						}[];
					};
					/**
					 * Status of the asset
					 */
					status?: 'waiting' | 'ready' | 'failed';
					/**
					 * ID of the source asset (root) - If missing, this is a root asset
					 */
					sourceAssetId?: string;
				};
				[k: string]: unknown;
			};
		};
	};
}
/**
 * LMPS ffmpeg profile
 */
export interface FfmpegProfile {
	width: number;
	name: string;
	height: number;
	bitrate: number;
	fps: number;
	fpsDen?: number;
	gop?: string;
	profile?: 'H264Baseline' | 'H264Main' | 'H264High' | 'H264ConstrainedHigh';
	encoder?: 'h264' | 'hevc' | 'vp8' | 'vp9';
}
export interface Asset {
	id?: string;
	/**
	 * Type of the asset.
	 */
	type?: 'video' | 'audio';
	/**
	 * Used to form playback URL and storage folder
	 */
	playbackId?: string;
	/**
	 * URL to manually download the asset if desired
	 */
	downloadUrl?: string;
	/**
	 * owner of the asset
	 */
	userId?: string;
	/**
	 * Set to true when the asset is deleted
	 */
	deleted?: boolean;
	/**
	 * Object store ID where the asset is stored
	 */
	objectStoreId?: string;
	/**
	 * Name of the asset. This is not necessarily the filename, can be a custom name or title
	 */
	name: string;
	/**
	 * User input metadata associated with the asset
	 */
	meta?: {
		[k: string]: string;
	};
	/**
	 * Timestamp (in milliseconds) at which the asset was last updated
	 */
	updatedAt?: number;
	/**
	 * Timestamp (in milliseconds) at which asset was created
	 */
	createdAt?: number;
	/**
	 * Size of the asset in bytes
	 */
	size?: number;
	/**
	 * Hash of the asset
	 */
	hash?: {
		/**
		 * Hash of the asset
		 */
		hash?: string;
		/**
		 * Hash algorithm used to compute the hash
		 */
		algorithm?: string;
	}[];
	/**
	 * Video metadata
	 */
	videoSpec?: {
		/**
		 * Format of the asset
		 */
		format?: string;
		/**
		 * Duration of the asset in seconds (float)
		 */
		duration?: number;
		/**
		 * Bitrate of the video in bits per second
		 */
		bitrate?: number;
		/**
		 * List of tracks associated with the asset when the format contemplates them (e.g. mp4)
		 */
		tracks?: {
			/**
			 * type of track
			 */
			type: 'video' | 'audio';
			/**
			 * Codec of the track
			 */
			codec: string;
			/**
			 * Start time of the track in seconds
			 */
			startTime?: number;
			/**
			 * Duration of the track in seconds
			 */
			duration?: number;
			/**
			 * Bitrate of the track in bits per second
			 */
			bitrate?: number;
			/**
			 * Width of the track - only for video tracks
			 */
			width?: number;
			/**
			 * Height of the track - only for video tracks
			 */
			height?: number;
			/**
			 * Pixel format of the track - only for video tracks
			 */
			pixelFormat?: string;
			/**
			 * Frame rate of the track - only for video tracks
			 */
			fps?: number;
			/**
			 * Amount of audio channels in the track
			 */
			channels?: number;
			/**
			 * Sample rate of the track in samples per second - only for audio tracks
			 */
			sampleRate?: number;
			/**
			 * Bit depth of the track - only for audio tracks
			 */
			bitDepth?: number;
		}[];
	};
	/**
	 * Status of the asset
	 */
	status?: 'waiting' | 'ready' | 'failed';
	/**
	 * ID of the source asset (root) - If missing, this is a root asset
	 */
	sourceAssetId?: string;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Parameters for the export task
 */
export type ExportTaskParams =
	| {
			/**
			 * custom URL parameters for the export task
			 */
			custom: {
				/**
				 * URL where to export the asset
				 */
				url: string;
				/**
				 * Method to use on the export request
				 */
				method?: string;
				/**
				 * Headers to add to the export request
				 */
				headers?: {
					[k: string]: string;
				};
			};
	  }
	| {
			ipfs: {
				/**
				 * Custom credentials for the Piñata service. Must have either a JWT or an API key and an API secret.
				 */
				pinata?:
					| {
							/**
							 * Will be added to the Authorization header as a Bearer token.
							 */
							jwt: string;
					  }
					| {
							/**
							 * Will be added to the pinata_api_key header.
							 */
							apiKey: string;
							/**
							 * Will be added to the pinata_secret_api_key header.
							 */
							apiSecret: string;
					  };
				/**
				 * Additional data to add to the NFT metadata exported to IPFS. Will be deep merged with the default metadata exported.
				 */
				nftMetadata?: {
					[k: string]: unknown;
				};
			};
	  };

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ApiToken {
	kind?: string;
	id?: string;
	userId?: string;
	name?: string;
	access?: {
		rules?: {
			resources: [string, ...string[]];
			methods?: [
				(
					| 'post'
					| 'get'
					| 'put'
					| 'patch'
					| 'delete'
					| 'head'
					| 'options'
					| '*'
				),
				...(
					| 'post'
					| 'get'
					| 'put'
					| 'patch'
					| 'delete'
					| 'head'
					| 'options'
					| '*'
				)[]
			];
		}[];
	};
	lastSeen?: number;
	/**
	 * Timestamp (in milliseconds) at which token object was created
	 */
	createdAt?: number;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface UserVerification {
	/**
	 * user email address
	 */
	email: string;
	emailValidToken: string;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface MakeAdmin {
	/**
	 * user email address
	 */
	email: string;
	admin: boolean;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface PasswordResetToken {
	kind: 'password-reset-token';
	userId: string;
	resetToken: string;
	/**
	 * Timestamp (in milliseconds) at which reset token will be expired
	 */
	expiration: number;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface PasswordResetTokenRequest {
	/**
	 * user email address
	 */
	email: string;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface PasswordResetConfirm {
	/**
	 * user email address
	 */
	email: string;
	resetToken: string;
	password: string;
	userId?: string;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CreateCustomer {
	/**
	 * user email address
	 */
	email: string;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CreateSubscription {
	/**
	 * stripe customer id
	 */
	stripeCustomerId: string;
	/**
	 * stripe payment method id
	 */
	stripeCustomerPaymentMethodId?: string;
	/**
	 * stripe product id
	 */
	stripeProductId: 'prod_0' | 'prod_1' | 'prod_2';
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface UpdateSubscription {
	/**
	 * stripe customer id
	 */
	stripeCustomerId: string;
	/**
	 * stripe subscription id
	 */
	stripeCustomerSubscriptionId?: string;
	/**
	 * stripe payment method id
	 */
	stripeCustomerPaymentMethodId?: string;
	/**
	 * stripe product id
	 */
	stripeProductId: 'prod_0' | 'prod_1' | 'prod_2';
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface UpdateCustomerPaymentMethod {
	/**
	 * stripe customer id
	 */
	stripeCustomerId: string;
	/**
	 * stripe payment method id
	 */
	stripeCustomerPaymentMethodId: string;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface RetrieveCustomerPaymentMethod {
	/**
	 * stripe payment method id
	 */
	stripeCustomerPaymentMethodId: string;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Region {
	/**
	 * region name
	 */
	region: string;
	orchestrators: {
		address: string;
	}[];
	[k: string]: unknown;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface User {
	/**
	 * user email address
	 */
	email: string;
	password: string;
	emailValidToken?: string;
	emailValid?: boolean;
	suspended?: boolean;
	salt?: string;
	admin?: boolean;
	kind?: string;
	id?: string;
	firstName?: string;
	lastName?: string;
	organization?: string;
	phone?: string;
	stripeProductId?: 'prod_0' | 'prod_1' | 'prod_2';
	stripeCustomerId?: string;
	stripeCustomerPaymentMethodId?: string;
	stripeCustomerSubscriptionId?: string;
	ccLast4?: string;
	ccBrand?: string;
	/**
	 * Timestamp (in milliseconds) at which user object was created
	 */
	createdAt?: number;
	/**
	 * Timestamp (in milliseconds) at which user object was verified
	 */
	verifiedAt?: number;
	/**
	 * Timestamp (in milliseconds) at which user object was verified
	 */
	planChangedAt?: number;
	/**
	 * Timestamp (in milliseconds) at which user streamed RTMP stream last time
	 */
	lastStreamedAt?: number;
	/**
	 * Timestamp (in milliseconds) at which user's password was used
	 */
	lastSeen?: number;
	/**
	 * Recaptcha v3 Token
	 */
	recaptchaToken?: string;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Usage {
	/**
	 * day associated with usage
	 */
	id?: string;
	kind?: string;
	date?: number;
	sourceSegments?: number;
	transcodedSegments?: number;
	sourceSegmentsDuration?: number;
	transcodedSegmentsDuration?: number;
	streamCount?: number;
}
