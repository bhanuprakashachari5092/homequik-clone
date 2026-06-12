import { r as registerVersion } from "./firebase__app.mjs";
import "./firebase__analytics.mjs";
import "./firebase__auth.mjs";
import "./firebase__logger.mjs";
import { c as collection, o as onSnapshot, q as query, w as where, d as doc, u as updateDoc } from "./firebase__firestore.mjs";
import { A, a, b, B, C, e, D, f, F, g, h, i, G, L, P, Q, j, k, l, m, n, p, r, s, t, S, T, v, V, W, x, y, z, E, H, I, J, K, M, N, _, O, R, U, X, Y, Z, $, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, a_, a$, b0, b1, b2 } from "./firebase__firestore.mjs";
import "./firebase__storage.mjs";
import "./firebase__component.mjs";
import "./firebase__util.mjs";
import "./idb.mjs";
import "./firebase__installations.mjs";
import "./firebase__webchannel-wrapper.mjs";
import "util";
import "crypto";
import "./@grpc/grpc-js.mjs";
import "process";
import "tls";
import "fs";
import "os";
import "net";
import "events";
import "http2";
import "http";
import "url";
import "dns";
import "zlib";
import "stream";
import "./@grpc/proto-loader.mjs";
import "path";
import "./lodash.camelcase.mjs";
import "./react.mjs";
import "./protobufjs.mjs";
import "./protobufjs__aspromise.mjs";
import "./protobufjs__base64.mjs";
import "./protobufjs__eventemitter.mjs";
import "./protobufjs__float.mjs";
import "./@protobufjs/inquire.mjs";
import "./protobufjs__utf8.mjs";
import "./protobufjs__pool.mjs";
import "./long.mjs";
import "./protobufjs__codegen.mjs";
import "./protobufjs__fetch.mjs";
import "./protobufjs__path.mjs";
var name = "firebase";
var version = "12.14.0";
registerVersion(name, version, "app");
export {
  A as AbstractUserDataWriter,
  a as AggregateField,
  b as AggregateQuerySnapshot,
  B as Bytes,
  C as CACHE_SIZE_UNLIMITED,
  e as CollectionReference,
  D as DocumentReference,
  f as DocumentSnapshot,
  F as FieldPath,
  g as FieldValue,
  h as Firestore,
  i as FirestoreError,
  G as GeoPoint,
  L as LoadBundleTask,
  P as PersistentCacheIndexManager,
  Q as Query,
  j as QueryCompositeFilterConstraint,
  k as QueryConstraint,
  l as QueryDocumentSnapshot,
  m as QueryEndAtConstraint,
  n as QueryFieldFilterConstraint,
  p as QueryLimitConstraint,
  r as QueryOrderByConstraint,
  s as QuerySnapshot,
  t as QueryStartAtConstraint,
  S as SnapshotMetadata,
  T as Timestamp,
  v as Transaction,
  V as VectorValue,
  W as WriteBatch,
  x as _AutoId,
  y as _ByteString,
  z as _DatabaseId,
  E as _DocumentKey,
  H as _EmptyAppCheckTokenProvider,
  I as _EmptyAuthCredentialsProvider,
  J as _FieldPath,
  K as _TestingHooks,
  M as _cast,
  N as _debugAssert,
  _ as _internalAggregationQueryToProtoRunAggregationQueryRequest,
  O as _internalQueryToProtoQueryTarget,
  R as _isBase64Available,
  U as _logWarn,
  X as _validateIsNotUsedTogether,
  Y as addDoc,
  Z as aggregateFieldEqual,
  $ as aggregateQuerySnapshotEqual,
  a0 as and,
  a1 as arrayRemove,
  a2 as arrayUnion,
  a3 as average,
  a4 as clearIndexedDbPersistence,
  collection,
  a5 as collectionGroup,
  a6 as connectFirestoreEmulator,
  a7 as count,
  a8 as deleteAllPersistentCacheIndexes,
  a9 as deleteDoc,
  aa as deleteField,
  ab as disableNetwork,
  ac as disablePersistentCacheIndexAutoCreation,
  doc,
  ad as documentId,
  ae as documentSnapshotFromJSON,
  af as enableIndexedDbPersistence,
  ag as enableMultiTabIndexedDbPersistence,
  ah as enableNetwork,
  ai as enablePersistentCacheIndexAutoCreation,
  aj as endAt,
  ak as endBefore,
  al as ensureFirestoreConfigured,
  am as executeWrite,
  an as getAggregateFromServer,
  ao as getCountFromServer,
  ap as getDoc,
  aq as getDocFromCache,
  ar as getDocFromServer,
  as as getDocs,
  at as getDocsFromCache,
  au as getDocsFromServer,
  av as getFirestore,
  aw as getPersistentCacheIndexManager,
  ax as increment,
  ay as initializeFirestore,
  az as limit,
  aA as limitToLast,
  aB as loadBundle,
  aC as maximum,
  aD as memoryEagerGarbageCollector,
  aE as memoryLocalCache,
  aF as memoryLruGarbageCollector,
  aG as minimum,
  aH as namedQuery,
  onSnapshot,
  aI as onSnapshotResume,
  aJ as onSnapshotsInSync,
  aK as or,
  aL as orderBy,
  aM as persistentLocalCache,
  aN as persistentMultipleTabManager,
  aO as persistentSingleTabManager,
  query,
  aP as queryEqual,
  aQ as querySnapshotFromJSON,
  aR as refEqual,
  aS as runTransaction,
  aT as serverTimestamp,
  aU as setDoc,
  aV as setIndexConfiguration,
  aW as setLogLevel,
  aX as snapshotEqual,
  aY as startAfter,
  aZ as startAt,
  a_ as sum,
  a$ as terminate,
  updateDoc,
  b0 as vector,
  b1 as waitForPendingWrites,
  where,
  b2 as writeBatch
};
