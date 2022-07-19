// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
    });
  const map0_ctc = ctc7;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc5],
      4: [ctc0, ctc1, ctc2, ctc5]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function _Investor_buy4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Investor_buy4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Investor_buy4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([ctc3]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v359, v360, v373, v414] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc7]);
  const v421 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:49:43:application call to [unknown function] (defined at: ./index.rsh:49:43:function exp)', 'at ./index.rsh:49:43:application call to [unknown function] (defined at: ./index.rsh:49:43:function exp)'],
    msg: 'in',
    who: 'Investor_buy'
    });
  const v422 = v421[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v424 = stdlib.div(v360, v422);
  const v425 = v414[stdlib.checkedBigNumberify('./index.rsh:51:58:application', stdlib.UInt_max, '0')];
  const v426 = v425[stdlib.checkedBigNumberify('./index.rsh:51:58:application', stdlib.UInt_max, '0')];
  const v427 = stdlib.le(v424, v426);
  stdlib.assert(v427, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:51:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:49:43:application call to [unknown function] (defined at: ./index.rsh:49:43:function exp)', 'at ./index.rsh:49:43:application call to [unknown function] (defined at: ./index.rsh:49:43:function exp)'],
    msg: 'all tokens have been purchased',
    who: 'Investor_buy'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v359, v360, v373, v414, v421],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v422, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v439], secs: v441, time: v440, didSend: v213, from: v438 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Investor_buy"
        });
      const v443 = v439[stdlib.checkedBigNumberify('./index.rsh:49:22:spread', stdlib.UInt_max, '0')];
      const v444 = stdlib.div(v360, v443);
      const v445 = v414[stdlib.checkedBigNumberify('./index.rsh:51:58:application', stdlib.UInt_max, '0')];
      const v446 = v445[stdlib.checkedBigNumberify('./index.rsh:51:58:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v443,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v463 = stdlib.sub(v446, v444);
      const v466 = v445[stdlib.checkedBigNumberify('./index.rsh:53:68:application', stdlib.UInt_max, '1')];
      const v467 = v445[stdlib.checkedBigNumberify('./index.rsh:53:68:application', stdlib.UInt_max, '2')];
      const v468 = [v463, v466, v467];
      const v469 = stdlib.Array_set(v414, stdlib.checkedBigNumberify('./index.rsh:53:68:application', stdlib.UInt_max, '0'), v468);
      sim_r.txns.push({
        kind: 'from',
        to: v438,
        tok: v373
        });
      await stdlib.simMapSet(sim_r, 0, v438, null);
      const v471 = v469[stdlib.checkedBigNumberify('./index.rsh:55:47:application', stdlib.UInt_max, '0')];
      const v472 = v471[stdlib.checkedBigNumberify('./index.rsh:55:47:application', stdlib.UInt_max, '0')];
      const v473 = await txn1.getOutput('Investor_buy', 'v472', ctc3, v472);
      
      sim_r.txns.push({
        kind: 'from',
        to: v359,
        tok: undefined /* Nothing */
        });
      const v591 = v469;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc7, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v439], secs: v441, time: v440, didSend: v213, from: v438 } = txn1;
  undefined /* setApiDetails */;
  const v443 = v439[stdlib.checkedBigNumberify('./index.rsh:49:22:spread', stdlib.UInt_max, '0')];
  const v444 = stdlib.div(v360, v443);
  const v445 = v414[stdlib.checkedBigNumberify('./index.rsh:51:58:application', stdlib.UInt_max, '0')];
  const v446 = v445[stdlib.checkedBigNumberify('./index.rsh:51:58:application', stdlib.UInt_max, '0')];
  const v447 = stdlib.le(v444, v446);
  stdlib.assert(v447, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:51:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:49:43:application call to [unknown function] (defined at: ./index.rsh:49:43:function exp)', 'at ./index.rsh:49:43:application call to [unknown function] (defined at: ./index.rsh:49:43:function exp)'],
    msg: 'all tokens have been purchased',
    who: 'Investor_buy'
    });
  ;
  const v463 = stdlib.sub(v446, v444);
  const v466 = v445[stdlib.checkedBigNumberify('./index.rsh:53:68:application', stdlib.UInt_max, '1')];
  const v467 = v445[stdlib.checkedBigNumberify('./index.rsh:53:68:application', stdlib.UInt_max, '2')];
  const v468 = [v463, v466, v467];
  const v469 = stdlib.Array_set(v414, stdlib.checkedBigNumberify('./index.rsh:53:68:application', stdlib.UInt_max, '0'), v468);
  ;
  await stdlib.mapSet(map0, v438, null);
  const v471 = v469[stdlib.checkedBigNumberify('./index.rsh:55:47:application', stdlib.UInt_max, '0')];
  const v472 = v471[stdlib.checkedBigNumberify('./index.rsh:55:47:application', stdlib.UInt_max, '0')];
  const v473 = await txn1.getOutput('Investor_buy', 'v472', ctc3, v472);
  if (v213) {
    stdlib.protect(ctc0, await interact.out(v439, v473), {
      at: './index.rsh:49:23:application',
      fs: ['at ./index.rsh:49:23:application call to [unknown function] (defined at: ./index.rsh:49:23:function exp)', 'at ./index.rsh:55:39:application call to "notify" (defined at: ./index.rsh:52:47:function exp)', 'at ./index.rsh:52:47:application call to [unknown function] (defined at: ./index.rsh:52:47:function exp)'],
      msg: 'out',
      who: 'Investor_buy'
      });
    }
  else {
    }
  
  ;
  const v591 = v469;
  return;
  
  
  
  };
export async function RealEstateCo(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for RealEstateCo expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for RealEstateCo expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc5 = stdlib.T_Object({
    name: ctc2,
    propertyValue: ctc3,
    symbol: ctc4,
    unitFraction: ctc3
    });
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc9]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v341 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v342 = [v341];
  const v348 = stdlib.protect(ctc5, await interact.getPropertyParams(), {
    at: './index.rsh:30:106:application',
    fs: ['at ./index.rsh:29:26:application call to [unknown function] (defined at: ./index.rsh:29:30:function exp)'],
    msg: 'getPropertyParams',
    who: 'RealEstateCo'
    });
  const v349 = v348.name;
  const v350 = v348.propertyValue;
  const v351 = v348.symbol;
  const v352 = v348.unitFraction;
  const v357 = stdlib.ge(v352, stdlib.checkedBigNumberify('./index.rsh:31:40:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v357, {
    at: './index.rsh:31:23:application',
    fs: ['at ./index.rsh:29:26:application call to [unknown function] (defined at: ./index.rsh:29:30:function exp)'],
    msg: null,
    who: 'RealEstateCo'
    });
  const v358 = stdlib.gt(v350, stdlib.checkedBigNumberify('./index.rsh:32:40:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v358, {
    at: './index.rsh:32:23:application',
    fs: ['at ./index.rsh:29:26:application call to [unknown function] (defined at: ./index.rsh:29:30:function exp)'],
    msg: null,
    who: 'RealEstateCo'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v350, v352, v349, v351],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:34:22:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc3, ctc2, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:34:22:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v360, v361, v362, v363], secs: v365, time: v364, didSend: v40, from: v359 } = txn1;
      
      ;
      const v370 = '                                                                                                ';
      const v371 = '                                ';
      const v372 = stdlib.simTokenNew(sim_r, v362, v363, v370, v371, v361, stdlib.checkedBigNumberify('./index.rsh:37:82:decimal', stdlib.UInt_max, '6'), getSimTokCtr());
      const v373 = await txn1.getOutput('internal', 'v372', ctc6, v372);
      const v383 = v342[stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '0')];
      const v385 = v383[stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '1')];
      const v386 = v383[stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '2')];
      const v387 = [v361, v385, v386];
      const v388 = stdlib.Array_set(v342, stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '0'), v387);
      const v390 = v388[stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '0')];
      const v391 = v390[stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '0')];
      const v393 = v390[stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '2')];
      const v394 = [v391, v361, v393];
      const v395 = stdlib.Array_set(v388, stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '0'), v394);
      const v396 = v395[stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '0')];
      const v397 = v396[stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '0')];
      const v398 = v396[stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '1')];
      const v400 = [v397, v398, false];
      const v401 = stdlib.Array_set(v395, stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '0'), v400);
      const v402 = stdlib.div(v360, v361);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc2, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v360, v361, v362, v363], secs: v365, time: v364, didSend: v40, from: v359 } = txn1;
  ;
  const v366 = stdlib.ge(v361, stdlib.checkedBigNumberify('./index.rsh:35:31:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v366, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:35:14:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'unit fraction is greater than or equal to 1',
    who: 'RealEstateCo'
    });
  const v368 = stdlib.gt(v360, stdlib.checkedBigNumberify('./index.rsh:36:31:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v368, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:36:14:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'property value is greater than 0',
    who: 'RealEstateCo'
    });
  const v370 = '                                                                                                ';
  const v371 = '                                ';
  const v372 = undefined /* TokenNew */;
  const v373 = await txn1.getOutput('internal', 'v372', ctc6, v372);
  const v383 = v342[stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '0')];
  const v385 = v383[stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '1')];
  const v386 = v383[stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '2')];
  const v387 = [v361, v385, v386];
  const v388 = stdlib.Array_set(v342, stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '0'), v387);
  const v390 = v388[stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '0')];
  const v391 = v390[stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '0')];
  const v393 = v390[stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '2')];
  const v394 = [v391, v361, v393];
  const v395 = stdlib.Array_set(v388, stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '0'), v394);
  const v396 = v395[stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '0')];
  const v397 = v396[stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '0')];
  const v398 = v396[stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '1')];
  const v400 = [v397, v398, false];
  const v401 = stdlib.Array_set(v395, stdlib.checkedBigNumberify('./index.rsh:37:32:application', stdlib.UInt_max, '0'), v400);
  const v402 = stdlib.div(v360, v361);
  const txn2 = await (ctc.sendrecv({
    args: [v359, v360, v373, v401],
    evt_cnt: 0,
    funcNum: 1,
    lct: v364,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:22:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v405, time: v404, didSend: v94, from: v403 } = txn2;
      
      ;
      
      const v408 = v404;
      const v414 = v401;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v484 = v414[stdlib.checkedBigNumberify('./index.rsh:61:32:application', stdlib.UInt_max, '0')];
        const v485 = v484[stdlib.checkedBigNumberify('./index.rsh:61:32:application', stdlib.UInt_max, '1')];
        stdlib.simTokenBurn(sim_r, v373, v485);
        stdlib.simTokenDestroy(sim_r, v373);
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc6, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v405, time: v404, didSend: v94, from: v403 } = txn2;
  ;
  const v406 = stdlib.addressEq(v359, v403);
  stdlib.assert(v406, {
    at: './index.rsh:41:22:dot',
    fs: [],
    msg: 'sender correct',
    who: 'RealEstateCo'
    });
  stdlib.protect(ctc0, await interact.saleReady(v373, v402), {
    at: './index.rsh:42:40:application',
    fs: ['at ./index.rsh:42:40:application call to [unknown function] (defined at: ./index.rsh:42:40:function exp)', 'at ./index.rsh:42:40:application call to "liftedInteract" (defined at: ./index.rsh:42:40:application)'],
    msg: 'saleReady',
    who: 'RealEstateCo'
    });
  
  let v408 = v404;
  let v414 = v401;
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v439], secs: v441, time: v440, didSend: v213, from: v438 } = txn3;
    undefined /* setApiDetails */;
    const v443 = v439[stdlib.checkedBigNumberify('./index.rsh:49:22:spread', stdlib.UInt_max, '0')];
    const v444 = stdlib.div(v360, v443);
    const v445 = v414[stdlib.checkedBigNumberify('./index.rsh:51:58:application', stdlib.UInt_max, '0')];
    const v446 = v445[stdlib.checkedBigNumberify('./index.rsh:51:58:application', stdlib.UInt_max, '0')];
    const v447 = stdlib.le(v444, v446);
    stdlib.assert(v447, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:51:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:49:43:application call to [unknown function] (defined at: ./index.rsh:49:43:function exp)', 'at ./index.rsh:49:43:application call to [unknown function] (defined at: ./index.rsh:49:43:function exp)'],
      msg: 'all tokens have been purchased',
      who: 'RealEstateCo'
      });
    ;
    const v463 = stdlib.sub(v446, v444);
    const v466 = v445[stdlib.checkedBigNumberify('./index.rsh:53:68:application', stdlib.UInt_max, '1')];
    const v467 = v445[stdlib.checkedBigNumberify('./index.rsh:53:68:application', stdlib.UInt_max, '2')];
    const v468 = [v463, v466, v467];
    const v469 = stdlib.Array_set(v414, stdlib.checkedBigNumberify('./index.rsh:53:68:application', stdlib.UInt_max, '0'), v468);
    ;
    await stdlib.mapSet(map0, v438, null);
    const v471 = v469[stdlib.checkedBigNumberify('./index.rsh:55:47:application', stdlib.UInt_max, '0')];
    const v472 = v471[stdlib.checkedBigNumberify('./index.rsh:55:47:application', stdlib.UInt_max, '0')];
    await txn3.getOutput('Investor_buy', 'v472', ctc3, v472);
    ;
    const cv408 = v440;
    const cv414 = v469;
    
    v408 = cv408;
    v414 = cv414;
    
    continue;
    
    }
  const v484 = v414[stdlib.checkedBigNumberify('./index.rsh:61:32:application', stdlib.UInt_max, '0')];
  const v485 = v484[stdlib.checkedBigNumberify('./index.rsh:61:32:application', stdlib.UInt_max, '1')];
  undefined /* TokenBurn */;
  undefined /* TokenDestroy */;
  return;
  
  
  
  
  };
export async function Investor_buy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Investor_buy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Investor_buy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Investor_buy4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Investor_buy(uint64)uint64`],
    pure: [],
    sigs: [`Investor_buy(uint64)uint64`]
    },
  appApproval: `BiAIAAEDBAggKKCNBiYCAQAAIjUAMRhBAsYpZEkiWzUBIQRbNQIxGSMSQQAIMQAoKGZCApQ2GgAXSUEAFCI1BCM1BoHM8bn7ChJENhoBQgAcNhoCFzUENhoDNhoBF0kjDEABEEkkDEAAyiQSRCU0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8hBVs1/iEGWzX9VzARNfxJNQU1+4AE15C03TT7ULA0+xc1+jT+NPoKNfk0/FcAEUk1+CJbNfc0+TT3DkQ0+ogCNDT3NPkJFjT4VwgIUDT4VxABUDX2sSKyATT5shIlshAxALIUNP2yEbMxACiAAQFmgAgAAAAAAAAB2DT2VwARVwAIULA09lcAEVcACDUHsSKyATT6sggjshA0/7IHszT/NP40/TIGNPZCATQjEkQjNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEmouRdLA0/zEAEkQ0/zQDIQVbNAMhBlsyBjQDVzARQgD0SCEHiAGEIjQBEkQ0BEkiEkw0AhIRREk1BUlKIls1/yEEWzX+VxAgNf1XMAg1/IAELu2MiDT/FlA0/hZQNP1QNPxQsIERrzX7NP4jD0Q0/yINRCEHiAEzsSKyASSyEDT+siKBBrIjNPyyJTT9siaBYK+yJzIDsigyCrIps7Q8NfqACAAAAAAAAAF0NPoWULA0+jX5NPtXABE1+DT+FjT4VwgIUDT4VxABUEk191cAEUk19lcACDT+FlA09lcQAVBJNfVXABFJNfRXAAg09FcICFAoUDXzMQA0/xZQNPkWUDTzUChLAVcAQWdIIzUBMgY1AkIARDX/Nf41/TX8STX7NPwWUDT9FlA0/1AoSwFXAEFnSCU1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 65,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v360",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v361",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T5",
                "name": "v362",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T6",
                "name": "v363",
                "type": "tuple"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v360",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v361",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T5",
                "name": "v362",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T6",
                "name": "v363",
                "type": "tuple"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T15",
                "name": "v439",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v372",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v472",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Investor_buy",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T15",
                "name": "v439",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002b3a38038062002b3a833981016040819052620000269162000743565b6000805543600355620000386200046b565b6040805133815283516020808301919091528085015180518385015290810151606080840191909152818401515160808401520151516001600160c01b03191660a082015290517fcd846dea1fbc0e7cb08165077b8fe9c6346beec84388e809ee4388a765dfbb669181900360c00190a180516000908190528151602090810182905282516040019190915281519082015152620000d934156007620003be565b620000f8600183602001516020015110156008620003be60201b60201c565b6020820151516200010d9015156009620003be565b60408181018051600090819052815160209081018290529151830181905260608401515283810151820151518251918201520160408051601f198184030181529082905260208481015160600151516001600160c01b031916908301529060280160408051808303601f1901815282825284820151805160208083015192850151908601919091529284015260608301919091529060800160408051601f19818403018152828252606086015151602084015291016040516020818303038152906040528560200151602001516006604051620001ea906200056d565b620001fb9695949392919062000875565b604051809103906000f08015801562000218573d6000803e3d6000fd5b506001600160a01b03166080820181905260a082018190526040519081527fec4812072ae5c506c26423401cc5b1387edc793f6078fd51c217bb29a7444c4f9060200160405180910390a160208281015181015160c08301805191909152828201805151830151825190930192909252815151604090810151825190151591015290519051620002ac9190600090620003e8565b60e082018181529051516101008301805191909152602084810151810151825190910152815151604090810151825190151591015290519051620002f49190600090620003e8565b6101208201818152905151610140830180519190915281515160209081015182519091015280516000604090910181905291519051620003359290620003e8565b610160820152620003456200057b565b338152602080840151518183015260a08301516001600160a01b0316604080840191909152610160840151606084015260016000819055439055516200038e91839101620008e0565b60405160208183030381529060405260029080519060200190620003b4929190620005b7565b50505050620009c0565b81620003e45760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620003f262000646565b60005b600181101562000448578481600181106200041457620004146200080f565b60200201518282600181106200042e576200042e6200080f565b6020020152806200043f8162000959565b915050620003f5565b50818184600181106200045f576200045f6200080f565b60200201529392505050565b604080516101e08101909152600061018082018181526101a083018290526101c0830191909152815260208101620004a262000646565b815260408051606080820183526000808352602080840182905283850182905280860193909352835180840185528181528486015281850181905260808501819052835191820184528082529181018290529182015260a082015260c0016200050a62000646565b815260408051606081018252600080825260208281018290529282015291019081526020016200053962000646565b815260408051606081018252600080825260208281018290529282015291019081526020016200056862000646565b905290565b6110878062001ab383390190565b604051806080016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016200056862000646565b828054620005c59062000983565b90600052602060002090601f016020900481019282620005e9576000855562000634565b82601f106200060457805160ff191683800117855562000634565b8280016001018555821562000634579182015b828111156200063457825182559160200191906001019062000617565b506200064292915062000693565b5090565b60405180602001604052806001905b6200067c604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620006555790505090565b5b8082111562000642576000815560010162000694565b604080519081016001600160401b0381118282101715620006db57634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b0381118282101715620006db57634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b0381118282101715620006db57634e487b7160e01b600052604160045260246000fd5b600081830360a08112156200075757600080fd5b62000761620006aa565b835181526080601f19830112156200077857600080fd5b62000782620006e1565b6020858101518252604086015182820152605f1984011215620007a457600080fd5b620007ae62000712565b6060860151815260408201526020607f1984011215620007cd57600080fd5b620007d762000712565b60808601519093506001600160c01b031981168114620007f657600080fd5b8352606081019290925260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b818110156200084d576020818501810151868301820152016200082f565b8181111562000860576000602083870101525b50601f01601f19169290920160200192915050565b60c0815260006200088a60c083018962000825565b82810360208401526200089e818962000825565b90508281036040840152620008b4818862000825565b90508281036060840152620008ca818762000825565b6080840195909552505060a00152949350505050565b81516001600160a01b039081168252602080840151818401526040808501519092168284015260608085015160c08501939192919083860160005b60018110156200094d57825180518352858101518684015284015115158483015291840191908501906001016200091b565b50505050505092915050565b60006000198214156200097c57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200099857607f821691505b60208210811415620009ba57634e487b7160e01b600052602260045260246000fd5b50919050565b6110e380620009d06000396000f3fe60806040526004361061006e5760003560e01c806330794e971161004b57806330794e97146100c15780633bc5b7bf146100d45780638323075714610101578063ab53f2c61461011657005b80631e93b0f1146100775780632772eddc1461009b5780632c10a159146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610be9565b610139565b6100756100bc366004610be9565b610164565b6100886100cf366004610c05565b61018b565b3480156100e057600080fd5b506100f46100ef366004610c36565b6101be565b6040516100929190610c69565b34801561010d57600080fd5b50600154610088565b34801561012257600080fd5b5061012b6101ea565b604051610092929190610cdc565b60408051602081019091526000815261016061015a36849003840184610dbe565b82610287565b5050565b60408051602081019091526000815261016061018536849003840184610e23565b82610547565b60006101956109f2565b60208082015151849052604080519182019052600081526101b68282610287565b519392505050565b60408051606081018252600080825260208201819052918101919091526101e4826106da565b92915050565b6000606060005460028080546101ff90610e5b565b80601f016020809104026020016040519081016040528092919081815260200182805461022b90610e5b565b80156102785780601f1061024d57610100808354040283529160200191610278565b820191906000526020600020905b81548152906001019060200180831161025b57829003601f168201915b50505050509050915091509091565b61029760046000541460106107b2565b81516102b29015806102ab57508251600154145b60116107b2565b6000808055600280546102c490610e5b565b80601f01602080910402602001604051908101604052809291908181526020018280546102f090610e5b565b801561033d5780601f106103125761010080835404028352916020019161033d565b820191906000526020600020905b81548152906001019060200180831161032057829003601f168201915b50505050508060200190518101906103559190610f61565b905061035f610a24565b60408051338152855160208083019190915286015151518183015290517f7d66d73ff83563156ca4ecd3b15e845da66b8d82f7da365588d378ce806c89ae9181900360600190a16020808501515151908301516103bc9190610f93565b808252606083015151516103d3911115600e6107b2565b602084015151516103e7903414600f6107b2565b8051606083015151516103fa9190610fcb565b602082810180519290925260608401805151820151835190920191909152805151604090810151835190151591015251905161043991906000906107d8565b8160400181905250610454826040015133836000015161084c565b33600090815260046020908152604091829020805462ff00ff1916600117905582820151515191519182527f146ecca35c491f379dd99f9104057c4212165f68f05e20f9746256a565aa0d8f910160405180910390a16040818101515151845282516020860151515191516001600160a01b03909116916108fc811502916000818181858888f193505050501580156104f1573d6000803e3d6000fd5b506104fa610a69565b825181516001600160a01b039182169052602080850151835182015260408086015184519316928101929092528083018051439052918401519151015261054081610865565b5050505050565b610557600160005414600c6107b2565b815161057290158061056b57508251600154145b600d6107b2565b60008080556002805461058490610e5b565b80601f01602080910402602001604051908101604052809291908181526020018280546105b090610e5b565b80156105fd5780601f106105d2576101008083540402835291602001916105fd565b820191906000526020600020905b8154815290600101906020018083116105e057829003601f168201915b50505050508060200190518101906106159190610f61565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a161066c3415600a6107b2565b8051610684906001600160a01b03163314600b6107b2565b61068c610a69565b815181516001600160a01b039182169052602080840151835182015260408085015184519316920191909152808201805143905260608401519051909101526106d481610865565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561072657610726610c53565b14156107a3576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561076757610767610c53565b600181111561077857610778610c53565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b816101605760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6107e0610a99565b60005b600181101561082c578481600181106107fe576107fe610fb5565b602002015182826001811061081557610815610fb5565b60200201528061082481610fe2565b9150506107e3565b508181846001811061084057610840610fb5565b60200201529392505050565b6108578383836108df565b61086057600080fd5b505050565b61086d610ae4565b8151516001600160a01b03908116825282516020908101518184015283516040908101519092168284015280840151810151606084015260046000554360015590516108bb91839101610ffd565b60405160208183030381529060405260029080519060200190610860929190610b1e565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161093e91611074565b60006040518083038185875af1925050503d806000811461097b576040519150601f19603f3d011682016040523d82523d6000602084013e610980565b606091505b5091509150610991828260026109b0565b50808060200190518101906109a69190611090565b9695505050505050565b606083156109bf5750816109eb565b8251156109cf5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016107cf565b9392505050565b604051806040016040528060008152602001610a1f60408051808201909152600060208201908152815290565b905290565b604051806060016040528060008152602001610a5c604051806060016040528060008152602001600081526020016000151581525090565b8152602001610a1f610a99565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101610a1f610ba2565b60405180602001604052806001905b610ace604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081610aa85790505090565b604051806080016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001610a1f610a99565b828054610b2a90610e5b565b90600052602060002090601f016020900481019282610b4c5760008555610b92565b82601f10610b6557805160ff1916838001178555610b92565b82800160010185558215610b92579182015b82811115610b92578251825591602001919060010190610b77565b50610b9e929150610bbc565b5090565b604051806040016040528060008152602001610a1f610a99565b5b80821115610b9e5760008155600101610bbd565b600060408284031215610be357600080fd5b50919050565b600060408284031215610bfb57600080fd5b6109eb8383610bd1565b600060208284031215610c1757600080fd5b5035919050565b6001600160a01b0381168114610c3357600080fd5b50565b600060208284031215610c4857600080fd5b81356109eb81610c1e565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110610c8e57634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b60005b83811015610ccb578181015183820152602001610cb3565b838111156106d45750506000910152565b8281526040602082015260008251806040840152610d01816060850160208701610cb0565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610d4f57610d4f610d16565b60405290565b6040516020810167ffffffffffffffff81118282101715610d4f57610d4f610d16565b6040516080810167ffffffffffffffff81118282101715610d4f57610d4f610d16565b6040516060810167ffffffffffffffff81118282101715610d4f57610d4f610d16565b60008183036040811215610dd157600080fd5b610dd9610d2c565b833581526020601f1983011215610def57600080fd5b610df7610d55565b9150610e01610d55565b602094850135815282529283015250919050565b8015158114610c3357600080fd5b600060408284031215610e3557600080fd5b610e3d610d2c565b823581526020830135610e4f81610e15565b60208201529392505050565b600181811c90821680610e6f57607f821691505b60208210811415610be357634e487b7160e01b600052602260045260246000fd5b600060c08284031215610ea257600080fd5b610eaa610d78565b90508151610eb781610c1e565b815260208281015181830152604080840151610ed281610c1e565b838201526060607f85018613610ee757600080fd5b610eef610d55565b8060c0870188811115610f0157600080fd5b8388015b81811015610f4f5784818b031215610f1d5760008081fd5b610f25610d9b565b81518152878201518882015286820151610f3e81610e15565b818801528452928601928401610f05565b50508083870152505050505092915050565b600060c08284031215610f7357600080fd5b6109eb8383610e90565b634e487b7160e01b600052601160045260246000fd5b600082610fb057634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052603260045260246000fd5b600082821015610fdd57610fdd610f7d565b500390565b6000600019821415610ff657610ff6610f7d565b5060010190565b81516001600160a01b039081168252602080840151818401526040808501519092168284015260608085015160c08501939192919083860160005b60018110156110685782518051835285810151868401528401511515848301529184019190850190600101611038565b50505050505092915050565b60008251611086818460208701610cb0565b9190910192915050565b6000602082840312156110a257600080fd5b81516109eb81610e1556fea2646970667358221220b429b7e28098892f5be25175ecbd3957dd19f54aabaaae3b5e8cc27d7b2a838764736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea2646970667358221220424feb06890617584aaca4ebbaa10fdc05812c8998ecc95f97eb6679fa18157764736f6c634300080c0033`,
  BytecodeLen: 11066,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:39:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:63:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:46:27:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Investor_buy": Investor_buy,
  "RealEstateCo": RealEstateCo
  };
export const _APIs = {
  Investor: {
    buy: Investor_buy
    }
  };
