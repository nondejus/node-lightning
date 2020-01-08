/**
 * Defined in BOLT01
 */
export enum MESSAGE_TYPE {
  // Setup and Control (0 - 31)
  INIT = 16,
  ERROR = 17,
  PING = 18,
  PONG = 19,

  // Channel (32-127)
  //

  // Commitment (128-255)
  //

  // Routing (256-511)
  CHANNEL_ANNOUNCEMENT = 256,
  NODE_ANNOUNCEMENT = 257,
  CHANNEL_UPDATE = 258,
  ANNOUNCEMENT_SIGNATURES = 259,

  QUERY_SHORT_CHANNEL_IDS = 261,
  REPLY_SHORT_CHANNEL_IDS_END = 262,

  QUERY_CHANNEL_RANGE = 263,
  REPLY_CHANNEL_RANGE = 264,

} // prettier-ignore
