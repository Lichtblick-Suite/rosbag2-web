import { TextEncoder, TextDecoder } from "util";

// github.com/jsdom/jsdom/issues/2524
global.TextEncoder = TextEncoder;
// @ts-expect-error ignore type miss-match with util TextDecode and global one
global.TextDecoder = TextDecoder;
