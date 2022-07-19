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
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function _Investor_buy4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Investor_buy4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Investor_buy4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Null;
  
  
  const [v357, v358, v371, v412] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc5]);
  const v419 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:44:43:application call to [unknown function] (defined at: ./index.rsh:44:43:function exp)', 'at ./index.rsh:44:43:application call to [unknown function] (defined at: ./index.rsh:44:43:function exp)'],
    msg: 'in',
    who: 'Investor_buy'
    });
  const v420 = v419[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v422 = stdlib.div(v358, v420);
  const v423 = v412[stdlib.checkedBigNumberify('./index.rsh:46:58:application', stdlib.UInt_max, '0')];
  const v424 = v423[stdlib.checkedBigNumberify('./index.rsh:46:58:application', stdlib.UInt_max, '0')];
  const v425 = stdlib.le(v422, v424);
  stdlib.assert(v425, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:46:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:44:43:application call to [unknown function] (defined at: ./index.rsh:44:43:function exp)', 'at ./index.rsh:44:43:application call to [unknown function] (defined at: ./index.rsh:44:43:function exp)'],
    msg: 'all tokens have been purchased',
    who: 'Investor_buy'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v357, v358, v371, v412, v419],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v420, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v437], secs: v439, time: v438, didSend: v212, from: v436 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Investor_buy"
        });
      const v441 = v437[stdlib.checkedBigNumberify('./index.rsh:44:22:spread', stdlib.UInt_max, '0')];
      const v442 = stdlib.div(v358, v441);
      const v443 = v412[stdlib.checkedBigNumberify('./index.rsh:46:58:application', stdlib.UInt_max, '0')];
      const v444 = v443[stdlib.checkedBigNumberify('./index.rsh:46:58:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v441,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v461 = stdlib.sub(v444, v442);
      const v464 = v443[stdlib.checkedBigNumberify('./index.rsh:48:68:application', stdlib.UInt_max, '1')];
      const v465 = v443[stdlib.checkedBigNumberify('./index.rsh:48:68:application', stdlib.UInt_max, '2')];
      const v466 = [v461, v464, v465];
      const v467 = stdlib.Array_set(v412, stdlib.checkedBigNumberify('./index.rsh:48:68:application', stdlib.UInt_max, '0'), v466);
      sim_r.txns.push({
        kind: 'from',
        to: v436,
        tok: v371
        });
      const v468 = v467[stdlib.checkedBigNumberify('./index.rsh:49:47:application', stdlib.UInt_max, '0')];
      const v469 = v468[stdlib.checkedBigNumberify('./index.rsh:49:47:application', stdlib.UInt_max, '0')];
      const v470 = await txn1.getOutput('Investor_buy', 'v469', ctc1, v469);
      
      sim_r.txns.push({
        kind: 'from',
        to: v357,
        tok: undefined /* Nothing */
        });
      const v581 = v467;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc5, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v437], secs: v439, time: v438, didSend: v212, from: v436 } = txn1;
  undefined /* setApiDetails */;
  const v441 = v437[stdlib.checkedBigNumberify('./index.rsh:44:22:spread', stdlib.UInt_max, '0')];
  const v442 = stdlib.div(v358, v441);
  const v443 = v412[stdlib.checkedBigNumberify('./index.rsh:46:58:application', stdlib.UInt_max, '0')];
  const v444 = v443[stdlib.checkedBigNumberify('./index.rsh:46:58:application', stdlib.UInt_max, '0')];
  const v445 = stdlib.le(v442, v444);
  stdlib.assert(v445, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:46:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:44:43:application call to [unknown function] (defined at: ./index.rsh:44:43:function exp)', 'at ./index.rsh:44:43:application call to [unknown function] (defined at: ./index.rsh:44:43:function exp)'],
    msg: 'all tokens have been purchased',
    who: 'Investor_buy'
    });
  ;
  const v461 = stdlib.sub(v444, v442);
  const v464 = v443[stdlib.checkedBigNumberify('./index.rsh:48:68:application', stdlib.UInt_max, '1')];
  const v465 = v443[stdlib.checkedBigNumberify('./index.rsh:48:68:application', stdlib.UInt_max, '2')];
  const v466 = [v461, v464, v465];
  const v467 = stdlib.Array_set(v412, stdlib.checkedBigNumberify('./index.rsh:48:68:application', stdlib.UInt_max, '0'), v466);
  ;
  const v468 = v467[stdlib.checkedBigNumberify('./index.rsh:49:47:application', stdlib.UInt_max, '0')];
  const v469 = v468[stdlib.checkedBigNumberify('./index.rsh:49:47:application', stdlib.UInt_max, '0')];
  const v470 = await txn1.getOutput('Investor_buy', 'v469', ctc1, v469);
  if (v212) {
    stdlib.protect(ctc7, await interact.out(v437, v470), {
      at: './index.rsh:44:23:application',
      fs: ['at ./index.rsh:44:23:application call to [unknown function] (defined at: ./index.rsh:44:23:function exp)', 'at ./index.rsh:49:39:application call to "notify" (defined at: ./index.rsh:47:47:function exp)', 'at ./index.rsh:47:47:application call to [unknown function] (defined at: ./index.rsh:47:47:function exp)'],
      msg: 'out',
      who: 'Investor_buy'
      });
    }
  else {
    }
  
  ;
  const v581 = v467;
  return;
  
  
  
  };
export async function RealEstateCo(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for RealEstateCo expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for RealEstateCo expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_Object({
    name: ctc0,
    propertyValue: ctc1,
    symbol: ctc2,
    unitFraction: ctc1
    });
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v339 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v340 = [v339];
  const v346 = stdlib.protect(ctc3, await interact.getPropertyParams(), {
    at: './index.rsh:26:106:application',
    fs: ['at ./index.rsh:25:26:application call to [unknown function] (defined at: ./index.rsh:25:30:function exp)'],
    msg: 'getPropertyParams',
    who: 'RealEstateCo'
    });
  const v347 = v346.name;
  const v348 = v346.propertyValue;
  const v349 = v346.symbol;
  const v350 = v346.unitFraction;
  const v355 = stdlib.ge(v350, stdlib.checkedBigNumberify('./index.rsh:27:40:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v355, {
    at: './index.rsh:27:23:application',
    fs: ['at ./index.rsh:25:26:application call to [unknown function] (defined at: ./index.rsh:25:30:function exp)'],
    msg: null,
    who: 'RealEstateCo'
    });
  const v356 = stdlib.gt(v348, stdlib.checkedBigNumberify('./index.rsh:28:40:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v356, {
    at: './index.rsh:28:23:application',
    fs: ['at ./index.rsh:25:26:application call to [unknown function] (defined at: ./index.rsh:25:30:function exp)'],
    msg: null,
    who: 'RealEstateCo'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v348, v350, v347, v349],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:30:22:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc1, ctc0, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:22:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v358, v359, v360, v361], secs: v363, time: v362, didSend: v40, from: v357 } = txn1;
      
      ;
      const v368 = '                                                                                                ';
      const v369 = '                                ';
      const v370 = stdlib.simTokenNew(sim_r, v360, v361, v368, v369, v359, stdlib.checkedBigNumberify('./index.rsh:33:82:decimal', stdlib.UInt_max, '6'), getSimTokCtr());
      const v371 = await txn1.getOutput('internal', 'v370', ctc4, v370);
      const v381 = v340[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0')];
      const v383 = v381[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '1')];
      const v384 = v381[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '2')];
      const v385 = [v359, v383, v384];
      const v386 = stdlib.Array_set(v340, stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0'), v385);
      const v388 = v386[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0')];
      const v389 = v388[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0')];
      const v391 = v388[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '2')];
      const v392 = [v389, v359, v391];
      const v393 = stdlib.Array_set(v386, stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0'), v392);
      const v394 = v393[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0')];
      const v395 = v394[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0')];
      const v396 = v394[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '1')];
      const v398 = [v395, v396, false];
      const v399 = stdlib.Array_set(v393, stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0'), v398);
      const v400 = stdlib.div(v358, v359);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v358, v359, v360, v361], secs: v363, time: v362, didSend: v40, from: v357 } = txn1;
  ;
  const v364 = stdlib.ge(v359, stdlib.checkedBigNumberify('./index.rsh:31:31:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v364, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:31:14:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'unit fraction is greater than or equal to 1',
    who: 'RealEstateCo'
    });
  const v366 = stdlib.gt(v358, stdlib.checkedBigNumberify('./index.rsh:32:31:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v366, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:32:14:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'property value is greater than 0',
    who: 'RealEstateCo'
    });
  const v368 = '                                                                                                ';
  const v369 = '                                ';
  const v370 = undefined /* TokenNew */;
  const v371 = await txn1.getOutput('internal', 'v370', ctc4, v370);
  const v381 = v340[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0')];
  const v383 = v381[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '1')];
  const v384 = v381[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '2')];
  const v385 = [v359, v383, v384];
  const v386 = stdlib.Array_set(v340, stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0'), v385);
  const v388 = v386[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0')];
  const v389 = v388[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0')];
  const v391 = v388[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '2')];
  const v392 = [v389, v359, v391];
  const v393 = stdlib.Array_set(v386, stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0'), v392);
  const v394 = v393[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0')];
  const v395 = v394[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0')];
  const v396 = v394[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '1')];
  const v398 = [v395, v396, false];
  const v399 = stdlib.Array_set(v393, stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0'), v398);
  const v400 = stdlib.div(v358, v359);
  const txn2 = await (ctc.sendrecv({
    args: [v357, v358, v371, v399],
    evt_cnt: 0,
    funcNum: 1,
    lct: v362,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:37:22:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v403, time: v402, didSend: v94, from: v401 } = txn2;
      
      ;
      
      const v406 = v402;
      const v412 = v399;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v481 = v412[stdlib.checkedBigNumberify('./index.rsh:55:32:application', stdlib.UInt_max, '0')];
        const v482 = v481[stdlib.checkedBigNumberify('./index.rsh:55:32:application', stdlib.UInt_max, '1')];
        stdlib.simTokenBurn(sim_r, v371, v482);
        stdlib.simTokenDestroy(sim_r, v371);
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
    tys: [ctc7, ctc1, ctc4, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v403, time: v402, didSend: v94, from: v401 } = txn2;
  ;
  const v404 = stdlib.addressEq(v357, v401);
  stdlib.assert(v404, {
    at: './index.rsh:37:22:dot',
    fs: [],
    msg: 'sender correct',
    who: 'RealEstateCo'
    });
  stdlib.protect(ctc5, await interact.saleReady(v371, v400), {
    at: './index.rsh:38:40:application',
    fs: ['at ./index.rsh:38:40:application call to [unknown function] (defined at: ./index.rsh:38:40:function exp)', 'at ./index.rsh:38:40:application call to "liftedInteract" (defined at: ./index.rsh:38:40:application)'],
    msg: 'saleReady',
    who: 'RealEstateCo'
    });
  
  let v406 = v402;
  let v412 = v399;
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v437], secs: v439, time: v438, didSend: v212, from: v436 } = txn3;
    undefined /* setApiDetails */;
    const v441 = v437[stdlib.checkedBigNumberify('./index.rsh:44:22:spread', stdlib.UInt_max, '0')];
    const v442 = stdlib.div(v358, v441);
    const v443 = v412[stdlib.checkedBigNumberify('./index.rsh:46:58:application', stdlib.UInt_max, '0')];
    const v444 = v443[stdlib.checkedBigNumberify('./index.rsh:46:58:application', stdlib.UInt_max, '0')];
    const v445 = stdlib.le(v442, v444);
    stdlib.assert(v445, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:46:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:44:43:application call to [unknown function] (defined at: ./index.rsh:44:43:function exp)', 'at ./index.rsh:44:43:application call to [unknown function] (defined at: ./index.rsh:44:43:function exp)'],
      msg: 'all tokens have been purchased',
      who: 'RealEstateCo'
      });
    ;
    const v461 = stdlib.sub(v444, v442);
    const v464 = v443[stdlib.checkedBigNumberify('./index.rsh:48:68:application', stdlib.UInt_max, '1')];
    const v465 = v443[stdlib.checkedBigNumberify('./index.rsh:48:68:application', stdlib.UInt_max, '2')];
    const v466 = [v461, v464, v465];
    const v467 = stdlib.Array_set(v412, stdlib.checkedBigNumberify('./index.rsh:48:68:application', stdlib.UInt_max, '0'), v466);
    ;
    const v468 = v467[stdlib.checkedBigNumberify('./index.rsh:49:47:application', stdlib.UInt_max, '0')];
    const v469 = v468[stdlib.checkedBigNumberify('./index.rsh:49:47:application', stdlib.UInt_max, '0')];
    await txn3.getOutput('Investor_buy', 'v469', ctc1, v469);
    ;
    const cv406 = v438;
    const cv412 = v467;
    
    v406 = cv406;
    v412 = cv412;
    
    continue;
    
    }
  const v481 = v412[stdlib.checkedBigNumberify('./index.rsh:55:32:application', stdlib.UInt_max, '0')];
  const v482 = v481[stdlib.checkedBigNumberify('./index.rsh:55:32:application', stdlib.UInt_max, '1')];
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
  appApproval: `BiAIAAEDBAggKKCNBiYCAQAAIjUAMRhBArApZEkiWzUBIQRbNQI2GgAXSUEAFCI1BCM1BoHM8bn7ChJENhoBQgAcNhoCFzUENhoDNhoBF0kjDEABCUkkDEAAwyQSRCU0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8hBVs1/iEGWzX9VzARNfxJNQU1+4AE15C03TT7ULA0+xc1+jT+NPoKNfk0/FcAEUk1+CJbNfc0+TT3DkQ0+ogCLTT3NPkJFjT4VwgIUDT4VxABUDX2sSKyATT5shIlshAxALIUNP2yEbOACAAAAAAAAAHVNPZXABFXAAhQsDT2VwARVwAINQexIrIBNPqyCCOyEDT/sgezNP80/jT9MgY09kIBNCMSRCM0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gASai5F0sDT/MQASRDT/NAMhBVs0AyEGWzIGNANXMBFCAPRIIQeIAYQiNAESRDQESSISTDQCEhFESTUFSUoiWzX/IQRbNf5XECA1/VcwCDX8gAQu7YyINP8WUDT+FlA0/VA0/FCwgRGvNfs0/iMPRDT/Ig1EIQeIATOxIrIBJLIQNP6yIoEGsiM0/LIlNP2yJoFgr7InMgOyKDIKsimztDw1+oAIAAAAAAAAAXI0+hZQsDT6Nfk0+1cAETX4NP4WNPhXCAhQNPhXEAFQSTX3VwARSTX2VwAINP4WUDT2VxABUEk19VcAEUk19FcACDT0VwgIUChQNfMxADT/FlA0+RZQNPNQKEsBVwBBZ0gjNQEyBjUCQgBENf81/jX9NfxJNfs0/BZQNP0WUDT/UChLAVcAQWdIJTUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 65,
  unsupported: [],
  version: 10,
  warnings: []
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
                "name": "v358",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v359",
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
                "internalType": "struct T4",
                "name": "v360",
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
                "internalType": "struct T5",
                "name": "v361",
                "type": "tuple"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
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
                "name": "v358",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v359",
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
                "internalType": "struct T4",
                "name": "v360",
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
                "internalType": "struct T5",
                "name": "v361",
                "type": "tuple"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
        "internalType": "struct T12",
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
                "internalType": "struct T14",
                "name": "v437",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
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
    "name": "_reach_oe_v370",
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
    "name": "_reach_oe_v469",
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
        "internalType": "struct T12",
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
                "internalType": "struct T14",
                "name": "v437",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
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
  Bytecode: `0x60806040526040516200295e3803806200295e833981016040819052620000269162000743565b6000805543600355620000386200046b565b6040805133815283516020808301919091528085015180518385015290810151606080840191909152818401515160808401520151516001600160c01b03191660a082015290517fcd846dea1fbc0e7cb08165077b8fe9c6346beec84388e809ee4388a765dfbb669181900360c00190a180516000908190528151602090810182905282516040019190915281519082015152620000d934156007620003be565b620000f8600183602001516020015110156008620003be60201b60201c565b6020820151516200010d9015156009620003be565b60408181018051600090819052815160209081018290529151830181905260608401515283810151820151518251918201520160408051601f198184030181529082905260208481015160600151516001600160c01b031916908301529060280160408051808303601f1901815282825284820151805160208083015192850151908601919091529284015260608301919091529060800160408051601f19818403018152828252606086015151602084015291016040516020818303038152906040528560200151602001516006604051620001ea906200056d565b620001fb9695949392919062000875565b604051809103906000f08015801562000218573d6000803e3d6000fd5b506001600160a01b03166080820181905260a082018190526040519081527f13928988b84f5ac9440bf319f86d39ef997e73c08d577a10d644be111284f3f49060200160405180910390a160208281015181015160c08301805191909152828201805151830151825190930192909252815151604090810151825190151591015290519051620002ac9190600090620003e8565b60e082018181529051516101008301805191909152602084810151810151825190910152815151604090810151825190151591015290519051620002f49190600090620003e8565b6101208201818152905151610140830180519190915281515160209081015182519091015280516000604090910181905291519051620003359290620003e8565b610160820152620003456200057b565b338152602080840151518183015260a08301516001600160a01b0316604080840191909152610160840151606084015260016000819055439055516200038e91839101620008e0565b60405160208183030381529060405260029080519060200190620003b4929190620005b7565b50505050620009c0565b81620003e45760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620003f262000646565b60005b600181101562000448578481600181106200041457620004146200080f565b60200201518282600181106200042e576200042e6200080f565b6020020152806200043f8162000959565b915050620003f5565b50818184600181106200045f576200045f6200080f565b60200201529392505050565b604080516101e08101909152600061018082018181526101a083018290526101c0830191909152815260208101620004a262000646565b815260408051606080820183526000808352602080840182905283850182905280860193909352835180840185528181528486015281850181905260808501819052835191820184528082529181018290529182015260a082015260c0016200050a62000646565b815260408051606081018252600080825260208281018290529282015291019081526020016200053962000646565b815260408051606081018252600080825260208281018290529282015291019081526020016200056862000646565b905290565b61108780620018d783390190565b604051806080016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016200056862000646565b828054620005c59062000983565b90600052602060002090601f016020900481019282620005e9576000855562000634565b82601f106200060457805160ff191683800117855562000634565b8280016001018555821562000634579182015b828111156200063457825182559160200191906001019062000617565b506200064292915062000693565b5090565b60405180602001604052806001905b6200067c604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620006555790505090565b5b8082111562000642576000815560010162000694565b604080519081016001600160401b0381118282101715620006db57634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b0381118282101715620006db57634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b0381118282101715620006db57634e487b7160e01b600052604160045260246000fd5b600081830360a08112156200075757600080fd5b62000761620006aa565b835181526080601f19830112156200077857600080fd5b62000782620006e1565b6020858101518252604086015182820152605f1984011215620007a457600080fd5b620007ae62000712565b6060860151815260408201526020607f1984011215620007cd57600080fd5b620007d762000712565b60808601519093506001600160c01b031981168114620007f657600080fd5b8352606081019290925260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b818110156200084d576020818501810151868301820152016200082f565b8181111562000860576000602083870101525b50601f01601f19169290920160200192915050565b60c0815260006200088a60c083018962000825565b82810360208401526200089e818962000825565b90508281036040840152620008b4818862000825565b90508281036060840152620008ca818762000825565b6080840195909552505060a00152949350505050565b81516001600160a01b039081168252602080840151818401526040808501519092168284015260608085015160c08501939192919083860160005b60018110156200094d57825180518352858101518684015284015115158483015291840191908501906001016200091b565b50505050505092915050565b60006000198214156200097c57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200099857607f821691505b60208210811415620009ba57634e487b7160e01b600052602260045260246000fd5b50919050565b610f0780620009d06000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632772eddc146100835780632c10a1591461009657806330794e97146100a957806383230757146100bc578063ab53f2c6146100d157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004610a84565b6100f4565b61005d6100a4366004610a84565b61011f565b6100706100b7366004610aa0565b610146565b3480156100c857600080fd5b50600154610070565b3480156100dd57600080fd5b506100e6610179565b60405161007a929190610ae5565b60408051602081019091526000815261011b61011536849003840184610bc7565b82610216565b5050565b60408051602081019091526000815261011b61014036849003840184610c2f565b826104ba565b600061015061088d565b60208082015151849052604080519182019052600081526101718282610216565b519392505050565b60006060600054600280805461018e90610c67565b80601f01602080910402602001604051908101604052809291908181526020018280546101ba90610c67565b80156102075780601f106101dc57610100808354040283529160200191610207565b820191906000526020600020905b8154815290600101906020018083116101ea57829003601f168201915b50505050509050915091509091565b610226600460005414601061064d565b815161024190158061023a57508251600154145b601161064d565b60008080556002805461025390610c67565b80601f016020809104026020016040519081016040528092919081815260200182805461027f90610c67565b80156102cc5780601f106102a1576101008083540402835291602001916102cc565b820191906000526020600020905b8154815290600101906020018083116102af57829003601f168201915b50505050508060200190518101906102e49190610d85565b90506102ee6108bf565b60408051338152855160208083019190915286015151518183015290517f7d66d73ff83563156ca4ecd3b15e845da66b8d82f7da365588d378ce806c89ae9181900360600190a160208085015151519083015161034b9190610db7565b80825260608301515151610362911115600e61064d565b60208401515151610376903414600f61064d565b8051606083015151516103899190610def565b60208281018051929092526060840180515182015183519092019190915280515160409081015183519015159101525190516103c89190600090610673565b81604001819052506103e382604001513383600001516106e7565b604081810151515190519081527f7399e19294f7aef3228df87a668e61c9a436b49fd6badbd6892b766d6263fc249060200160405180910390a16040818101515151845282516020860151515191516001600160a01b03909116916108fc811502916000818181858888f19350505050158015610464573d6000803e3d6000fd5b5061046d610904565b825181516001600160a01b03918216905260208085015183518201526040808601518451931692810192909252808301805143905291840151915101526104b381610700565b5050505050565b6104ca600160005414600c61064d565b81516104e59015806104de57508251600154145b600d61064d565b6000808055600280546104f790610c67565b80601f016020809104026020016040519081016040528092919081815260200182805461052390610c67565b80156105705780601f1061054557610100808354040283529160200191610570565b820191906000526020600020905b81548152906001019060200180831161055357829003601f168201915b50505050508060200190518101906105889190610d85565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16105df3415600a61064d565b80516105f7906001600160a01b03163314600b61064d565b6105ff610904565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169201919091528082018051439052606084015190519091015261064781610700565b50505050565b8161011b5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b61067b610934565b60005b60018110156106c75784816001811061069957610699610dd9565b60200201518282600181106106b0576106b0610dd9565b6020020152806106bf81610e06565b91505061067e565b50818184600181106106db576106db610dd9565b60200201529392505050565b6106f283838361077a565b6106fb57600080fd5b505050565b61070861097f565b8151516001600160a01b039081168252825160209081015181840152835160409081015190921682840152808401518101516060840152600460005543600155905161075691839101610e21565b604051602081830303815290604052600290805190602001906106fb9291906109b9565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916107d991610e98565b60006040518083038185875af1925050503d8060008114610816576040519150601f19603f3d011682016040523d82523d6000602084013e61081b565b606091505b509150915061082c8282600261084b565b50808060200190518101906108419190610eb4565b9695505050505050565b6060831561085a575081610886565b82511561086a5782518084602001fd5b60405163100960cb60e01b81526004810183905260240161066a565b9392505050565b6040518060400160405280600081526020016108ba60408051808201909152600060208201908152815290565b905290565b6040518060600160405280600081526020016108f7604051806060016040528060008152602001600081526020016000151581525090565b81526020016108ba610934565b6040805160a0810182526000918101828152606082018390526080820192909252908152602081016108ba610a3d565b60405180602001604052806001905b610969604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816109435790505090565b604051806080016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016108ba610934565b8280546109c590610c67565b90600052602060002090601f0160209004810192826109e75760008555610a2d565b82601f10610a0057805160ff1916838001178555610a2d565b82800160010185558215610a2d579182015b82811115610a2d578251825591602001919060010190610a12565b50610a39929150610a57565b5090565b6040518060400160405280600081526020016108ba610934565b5b80821115610a395760008155600101610a58565b600060408284031215610a7e57600080fd5b50919050565b600060408284031215610a9657600080fd5b6108868383610a6c565b600060208284031215610ab257600080fd5b5035919050565b60005b83811015610ad4578181015183820152602001610abc565b838111156106475750506000910152565b8281526040602082015260008251806040840152610b0a816060850160208701610ab9565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610b5857610b58610b1f565b60405290565b6040516020810167ffffffffffffffff81118282101715610b5857610b58610b1f565b6040516080810167ffffffffffffffff81118282101715610b5857610b58610b1f565b6040516060810167ffffffffffffffff81118282101715610b5857610b58610b1f565b60008183036040811215610bda57600080fd5b610be2610b35565b833581526020601f1983011215610bf857600080fd5b610c00610b5e565b9150610c0a610b5e565b602094850135815282529283015250919050565b8015158114610c2c57600080fd5b50565b600060408284031215610c4157600080fd5b610c49610b35565b823581526020830135610c5b81610c1e565b60208201529392505050565b600181811c90821680610c7b57607f821691505b60208210811415610a7e57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610cb357600080fd5b919050565b600060c08284031215610cca57600080fd5b610cd2610b81565b9050610cdd82610c9c565b8152602080830151818301526040610cf6818501610c9c565b81840152606085607f860112610d0b57600080fd5b610d13610b5e565b8060c0870188811115610d2557600080fd5b8388015b81811015610d735784818b031215610d415760008081fd5b610d49610ba4565b81518152878201518882015286820151610d6281610c1e565b818801528452928601928401610d29565b50508083870152505050505092915050565b600060c08284031215610d9757600080fd5b6108868383610cb8565b634e487b7160e01b600052601160045260246000fd5b600082610dd457634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052603260045260246000fd5b600082821015610e0157610e01610da1565b500390565b6000600019821415610e1a57610e1a610da1565b5060010190565b81516001600160a01b039081168252602080840151818401526040808501519092168284015260608085015160c08501939192919083860160005b6001811015610e8c5782518051835285810151868401528401511515848301529184019190850190600101610e5c565b50505050505092915050565b60008251610eaa818460208701610ab9565b9190910192915050565b600060208284031215610ec657600080fd5b815161088681610c1e56fea26469706673582212209e5879df19bbbfcb8f3d96f1f862938ca966276519f0f85e268efe3ce1b0f58f64736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea2646970667358221220a0ff7ca345b8248562d647d128a5856e9e3b00fc575740edd84180c9d51b7a7964736f6c634300080c0033`,
  BytecodeLen: 10590,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:35:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:57:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:41:27:after expr stmt semicolon',
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
