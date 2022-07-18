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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc5],
      4: [ctc1, ctc5]
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
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1, ctc2]);
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Null;
  
  
  const [v361, v402] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc4]);
  const v409 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:44:43:application call to [unknown function] (defined at: ./index.rsh:44:43:function exp)', 'at ./index.rsh:44:43:application call to [unknown function] (defined at: ./index.rsh:44:43:function exp)'],
    msg: 'in',
    who: 'Investor_buy'
    });
  const v410 = v409[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v412 = v402[stdlib.checkedBigNumberify('./index.rsh:47:46:application', stdlib.UInt_max, '0')];
  const v413 = v412[stdlib.checkedBigNumberify('./index.rsh:47:46:application', stdlib.UInt_max, '0')];
  const v414 = stdlib.le(v410, v413);
  stdlib.assert(v414, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:47:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:44:43:application call to [unknown function] (defined at: ./index.rsh:44:43:function exp)', 'at ./index.rsh:44:43:application call to [unknown function] (defined at: ./index.rsh:44:43:function exp)'],
    msg: 'all tokens have been purchased',
    who: 'Investor_buy'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v361, v402, v409],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [v410, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v425], secs: v427, time: v426, didSend: v208, from: v424 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Investor_buy"
        });
      const v429 = v425[stdlib.checkedBigNumberify('./index.rsh:44:22:spread', stdlib.UInt_max, '0')];
      const v430 = v402[stdlib.checkedBigNumberify('./index.rsh:47:46:application', stdlib.UInt_max, '0')];
      const v431 = v430[stdlib.checkedBigNumberify('./index.rsh:47:46:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v429,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v442 = null;
      const v443 = await txn1.getOutput('Investor_buy', 'v442', ctc6, v442);
      
      const v454 = stdlib.sub(v431, v429);
      const v457 = v430[stdlib.checkedBigNumberify('./index.rsh:50:56:application', stdlib.UInt_max, '1')];
      const v458 = v430[stdlib.checkedBigNumberify('./index.rsh:50:56:application', stdlib.UInt_max, '2')];
      const v459 = [v454, v457, v458];
      const v460 = stdlib.Array_set(v402, stdlib.checkedBigNumberify('./index.rsh:50:56:application', stdlib.UInt_max, '0'), v459);
      sim_r.txns.push({
        kind: 'from',
        to: v424,
        tok: v361
        });
      const v562 = v460;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc4, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v425], secs: v427, time: v426, didSend: v208, from: v424 } = txn1;
  undefined /* setApiDetails */;
  const v429 = v425[stdlib.checkedBigNumberify('./index.rsh:44:22:spread', stdlib.UInt_max, '0')];
  const v430 = v402[stdlib.checkedBigNumberify('./index.rsh:47:46:application', stdlib.UInt_max, '0')];
  const v431 = v430[stdlib.checkedBigNumberify('./index.rsh:47:46:application', stdlib.UInt_max, '0')];
  const v432 = stdlib.le(v429, v431);
  stdlib.assert(v432, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:47:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:44:43:application call to [unknown function] (defined at: ./index.rsh:44:43:function exp)', 'at ./index.rsh:44:43:application call to [unknown function] (defined at: ./index.rsh:44:43:function exp)'],
    msg: 'all tokens have been purchased',
    who: 'Investor_buy'
    });
  ;
  const v442 = null;
  const v443 = await txn1.getOutput('Investor_buy', 'v442', ctc6, v442);
  if (v208) {
    stdlib.protect(ctc6, await interact.out(v425, v443), {
      at: './index.rsh:44:23:application',
      fs: ['at ./index.rsh:44:23:application call to [unknown function] (defined at: ./index.rsh:44:23:function exp)', 'at ./index.rsh:49:39:application call to "notify" (defined at: ./index.rsh:48:47:function exp)', 'at ./index.rsh:48:47:application call to [unknown function] (defined at: ./index.rsh:48:47:function exp)'],
      msg: 'out',
      who: 'Investor_buy'
      });
    }
  else {
    }
  
  const v454 = stdlib.sub(v431, v429);
  const v457 = v430[stdlib.checkedBigNumberify('./index.rsh:50:56:application', stdlib.UInt_max, '1')];
  const v458 = v430[stdlib.checkedBigNumberify('./index.rsh:50:56:application', stdlib.UInt_max, '2')];
  const v459 = [v454, v457, v458];
  const v460 = stdlib.Array_set(v402, stdlib.checkedBigNumberify('./index.rsh:50:56:application', stdlib.UInt_max, '0'), v459);
  ;
  const v562 = v460;
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
  
  
  const v329 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v330 = [v329];
  const v336 = stdlib.protect(ctc3, await interact.getPropertyParams(), {
    at: './index.rsh:26:106:application',
    fs: ['at ./index.rsh:25:26:application call to [unknown function] (defined at: ./index.rsh:25:30:function exp)'],
    msg: 'getPropertyParams',
    who: 'RealEstateCo'
    });
  const v337 = v336.name;
  const v338 = v336.propertyValue;
  const v339 = v336.symbol;
  const v340 = v336.unitFraction;
  const v345 = stdlib.ge(v340, stdlib.checkedBigNumberify('./index.rsh:27:40:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v345, {
    at: './index.rsh:27:23:application',
    fs: ['at ./index.rsh:25:26:application call to [unknown function] (defined at: ./index.rsh:25:30:function exp)'],
    msg: null,
    who: 'RealEstateCo'
    });
  const v346 = stdlib.gt(v338, stdlib.checkedBigNumberify('./index.rsh:28:40:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v346, {
    at: './index.rsh:28:23:application',
    fs: ['at ./index.rsh:25:26:application call to [unknown function] (defined at: ./index.rsh:25:30:function exp)'],
    msg: null,
    who: 'RealEstateCo'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v338, v340, v337, v339],
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
      
      
      const {data: [v348, v349, v350, v351], secs: v353, time: v352, didSend: v40, from: v347 } = txn1;
      
      ;
      const v358 = '                                                                                                ';
      const v359 = '                                ';
      const v360 = stdlib.simTokenNew(sim_r, v350, v351, v358, v359, v349, stdlib.checkedBigNumberify('./index.rsh:33:82:decimal', stdlib.UInt_max, '6'), getSimTokCtr());
      const v361 = await txn1.getOutput('internal', 'v360', ctc4, v360);
      const v371 = v330[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0')];
      const v373 = v371[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '1')];
      const v374 = v371[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '2')];
      const v375 = [v349, v373, v374];
      const v376 = stdlib.Array_set(v330, stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0'), v375);
      const v378 = v376[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0')];
      const v379 = v378[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0')];
      const v381 = v378[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '2')];
      const v382 = [v379, v349, v381];
      const v383 = stdlib.Array_set(v376, stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0'), v382);
      const v384 = v383[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0')];
      const v385 = v384[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0')];
      const v386 = v384[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '1')];
      const v388 = [v385, v386, false];
      const v389 = stdlib.Array_set(v383, stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0'), v388);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v348, v349, v350, v351], secs: v353, time: v352, didSend: v40, from: v347 } = txn1;
  ;
  const v354 = stdlib.ge(v349, stdlib.checkedBigNumberify('./index.rsh:31:31:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v354, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:31:14:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'unit fraction is greater than or equal to 1',
    who: 'RealEstateCo'
    });
  const v356 = stdlib.gt(v348, stdlib.checkedBigNumberify('./index.rsh:32:31:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v356, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:32:14:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'property value is greater than 0',
    who: 'RealEstateCo'
    });
  const v358 = '                                                                                                ';
  const v359 = '                                ';
  const v360 = undefined /* TokenNew */;
  const v361 = await txn1.getOutput('internal', 'v360', ctc4, v360);
  const v371 = v330[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0')];
  const v373 = v371[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '1')];
  const v374 = v371[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '2')];
  const v375 = [v349, v373, v374];
  const v376 = stdlib.Array_set(v330, stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0'), v375);
  const v378 = v376[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0')];
  const v379 = v378[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0')];
  const v381 = v378[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '2')];
  const v382 = [v379, v349, v381];
  const v383 = stdlib.Array_set(v376, stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0'), v382);
  const v384 = v383[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0')];
  const v385 = v384[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0')];
  const v386 = v384[stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '1')];
  const v388 = [v385, v386, false];
  const v389 = stdlib.Array_set(v383, stdlib.checkedBigNumberify('./index.rsh:33:32:application', stdlib.UInt_max, '0'), v388);
  const txn2 = await (ctc.sendrecv({
    args: [v347, v361, v389],
    evt_cnt: 0,
    funcNum: 1,
    lct: v352,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:37:22:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v393, time: v392, didSend: v94, from: v391 } = txn2;
      
      ;
      
      const v396 = v392;
      const v402 = v389;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v462 = v402[stdlib.checkedBigNumberify('./index.rsh:55:32:application', stdlib.UInt_max, '0')];
        const v463 = v462[stdlib.checkedBigNumberify('./index.rsh:55:32:application', stdlib.UInt_max, '1')];
        stdlib.simTokenBurn(sim_r, v361, v463);
        stdlib.simTokenDestroy(sim_r, v361);
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
    tys: [ctc7, ctc4, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v393, time: v392, didSend: v94, from: v391 } = txn2;
  ;
  const v394 = stdlib.addressEq(v347, v391);
  stdlib.assert(v394, {
    at: './index.rsh:37:22:dot',
    fs: [],
    msg: 'sender correct',
    who: 'RealEstateCo'
    });
  stdlib.protect(ctc5, await interact.saleReady(), {
    at: './index.rsh:38:40:application',
    fs: ['at ./index.rsh:38:40:application call to [unknown function] (defined at: ./index.rsh:38:40:function exp)', 'at ./index.rsh:38:40:application call to "liftedInteract" (defined at: ./index.rsh:38:40:application)'],
    msg: 'saleReady',
    who: 'RealEstateCo'
    });
  
  let v396 = v392;
  let v402 = v389;
  
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
    const {data: [v425], secs: v427, time: v426, didSend: v208, from: v424 } = txn3;
    undefined /* setApiDetails */;
    const v429 = v425[stdlib.checkedBigNumberify('./index.rsh:44:22:spread', stdlib.UInt_max, '0')];
    const v430 = v402[stdlib.checkedBigNumberify('./index.rsh:47:46:application', stdlib.UInt_max, '0')];
    const v431 = v430[stdlib.checkedBigNumberify('./index.rsh:47:46:application', stdlib.UInt_max, '0')];
    const v432 = stdlib.le(v429, v431);
    stdlib.assert(v432, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:47:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:44:43:application call to [unknown function] (defined at: ./index.rsh:44:43:function exp)', 'at ./index.rsh:44:43:application call to [unknown function] (defined at: ./index.rsh:44:43:function exp)'],
      msg: 'all tokens have been purchased',
      who: 'RealEstateCo'
      });
    ;
    const v442 = null;
    await txn3.getOutput('Investor_buy', 'v442', ctc5, v442);
    const v454 = stdlib.sub(v431, v429);
    const v457 = v430[stdlib.checkedBigNumberify('./index.rsh:50:56:application', stdlib.UInt_max, '1')];
    const v458 = v430[stdlib.checkedBigNumberify('./index.rsh:50:56:application', stdlib.UInt_max, '2')];
    const v459 = [v454, v457, v458];
    const v460 = stdlib.Array_set(v402, stdlib.checkedBigNumberify('./index.rsh:50:56:application', stdlib.UInt_max, '0'), v459);
    ;
    const cv396 = v426;
    const cv402 = v460;
    
    v396 = cv396;
    v402 = cv402;
    
    continue;
    
    }
  const v462 = v402[stdlib.checkedBigNumberify('./index.rsh:55:32:application', stdlib.UInt_max, '0')];
  const v463 = v462[stdlib.checkedBigNumberify('./index.rsh:55:32:application', stdlib.UInt_max, '1')];
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
    impure: [`Investor_buy(uint64)byte[0]`],
    pure: [],
    sigs: [`Investor_buy(uint64)byte[0]`]
    },
  appApproval: `BiAGAAEDBAigjQYmAgEAACI1ADEYQQJcKWRJIls1ASEEWzUCNhoAF0lBABQiNQQjNQaBma3tmg8SRDYaAUIAHDYaAhc1BDYaAzYaARdJIwxAAMRJJAxAAIgkEkQlNAESRDQESSISTDQCEhFEKGRJNQNJIls1/1cIETX+STUFNf2ABNeQtN00/VCwNP0XNfw0/lcAEUk1+yJbNfo0/DT6DkQ0/IgB7IAIAAAAAAAAAbqwKTUHsSKyATT8shIlshAxALIUNP+yEbM0/zIGNPo0/AkWNPtXCAhQNPtXEAFQQgEmIxJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABJqLkXSwNANXACAxABJENAOBIFsyBjQDVygRQgDwSCEFiAF1IjQBEkQ0BEkiEkw0AhIRREk1BUlKIls1/yEEWzX+VxAgNf1XMAg1/IAELu2MiDT/FlA0/hZQNP1QNPxQsIERrzX7NP4jD0Q0/yINRCEFiAEksSKyASSyEDT+siKBBrIjNPyyJTT9siaBYK+yJzIDsigyCrIps7Q8NfqACAAAAAAAAAFoNPoWULA0+jX5NPtXABE1+DT+FjT4VwgIUDT4VxABUEk191cAEUk19lcACDT+FlA09lcQAVBJNfVXABFJNfRXAAg09FcICFAoUDXzMQA0+RZQNPNQKEsBVwA5Z0gjNQEyBjUCQgA5Nf81/kk1/RY0/1AoSwFXABlnSCU1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 57,
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
                "name": "v348",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v349",
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
                "name": "v350",
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
                "name": "v351",
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
                "name": "v348",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v349",
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
                "name": "v350",
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
                "name": "v351",
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
                "name": "v425",
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
    "name": "_reach_oe_v360",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v442",
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
        "internalType": "bool",
        "name": "",
        "type": "bool"
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
                "name": "v425",
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
  Bytecode: `0x60806040526040516200282038038062002820833981016040819052620000269162000721565b60008055436003556200003862000464565b6040805133815283516020808301919091528085015180518385015290810151606080840191909152818401515160808401520151516001600160c01b03191660a082015290517fcd846dea1fbc0e7cb08165077b8fe9c6346beec84388e809ee4388a765dfbb669181900360c00190a180516000908190528151602090810182905282516040019190915281519082015152620000d934156007620003b7565b620000f8600183602001516020015110156008620003b760201b60201c565b6020820151516200010d9015156009620003b7565b60408181018051600090819052815160209081018290529151830181905260608401515283810151820151518251918201520160408051601f198184030181529082905260208481015160600151516001600160c01b031916908301529060280160408051808303601f1901815282825284820151805160208083015192850151908601919091529284015260608301919091529060800160408051601f19818403018152828252606086015151602084015291016040516020818303038152906040528560200151602001516006604051620001ea9062000566565b620001fb9695949392919062000853565b604051809103906000f08015801562000218573d6000803e3d6000fd5b506001600160a01b03166080820181905260a082018190526040519081527f6278a9db1b2c1c6d426d95eebc710ae6ae74eff7566c02ba65530fd0976749df9060200160405180910390a160208281015181015160c08301805191909152828201805151830151825190930192909252815151604090810151825190151591015290519051620002ac9190600090620003e1565b60e082018181529051516101008301805191909152602084810151810151825190910152815151604090810151825190151591015290519051620002f49190600090620003e1565b6101208201818152905151610140830180519190915281515160209081015182519091015280516000604090910181905291519051620003359290620003e1565b6101608201526200034562000574565b33815260a08201516001600160a01b031660208083019190915261016083015160408084019190915260016000819055439055516200038791839101620008be565b60405160208183030381529060405260029080519060200190620003ad92919062000595565b5050505062000992565b81620003dd5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620003eb62000624565b60005b600181101562000441578481600181106200040d576200040d620007ed565b6020020151828260018110620004275762000427620007ed565b60200201528062000438816200092b565b915050620003ee565b5081818460018110620004585762000458620007ed565b60200201529392505050565b604080516101e08101909152600061018082018181526101a083018290526101c08301919091528152602081016200049b62000624565b815260408051606080820183526000808352602080840182905283850182905280860193909352835180840185528181528486015281850181905260808501819052835191820184528082529181018290529182015260a082015260c0016200050362000624565b815260408051606081018252600080825260208281018290529282015291019081526020016200053262000624565b815260408051606081018252600080825260208281018290529282015291019081526020016200056162000624565b905290565b611087806200179983390190565b60408051606081018252600080825260208201529081016200056162000624565b828054620005a39062000955565b90600052602060002090601f016020900481019282620005c7576000855562000612565b82601f10620005e257805160ff191683800117855562000612565b8280016001018555821562000612579182015b8281111562000612578251825591602001919060010190620005f5565b506200062092915062000671565b5090565b60405180602001604052806001905b6200065a604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620006335790505090565b5b8082111562000620576000815560010162000672565b604080519081016001600160401b0381118282101715620006b957634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b0381118282101715620006b957634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b0381118282101715620006b957634e487b7160e01b600052604160045260246000fd5b600081830360a08112156200073557600080fd5b6200073f62000688565b835181526080601f19830112156200075657600080fd5b62000760620006bf565b6020858101518252604086015182820152605f19840112156200078257600080fd5b6200078c620006f0565b6060860151815260408201526020607f1984011215620007ab57600080fd5b620007b5620006f0565b60808601519093506001600160c01b031981168114620007d457600080fd5b8352606081019290925260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b818110156200082b576020818501810151868301820152016200080d565b818111156200083e576000602083870101525b50601f01601f19169290920160200192915050565b60c0815260006200086860c083018962000803565b82810360208401526200087c818962000803565b9050828103604084015262000892818862000803565b90508281036060840152620008a8818762000803565b6080840195909552505060a00152949350505050565b81516001600160a01b0390811682526020808401519091168183015260408084015160a08401929082850160005b60018110156200092057825180518352848101518584015285015115158583015291830191606090910190600101620008ec565b505050505092915050565b60006000198214156200094e57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200096a57607f821691505b602082108114156200098c57634e487b7160e01b600052602260045260246000fd5b50919050565b610df780620009a26000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632772eddc146100835780632c10a1591461009657806330794e97146100a957806383230757146100cc578063ab53f2c6146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004610993565b610104565b61005d6100a4366004610993565b61012f565b6100bc6100b73660046109af565b610156565b604051901515815260200161007a565b3480156100d857600080fd5b50600154610070565b3480156100ed57600080fd5b506100f6610189565b60405161007a9291906109f4565b60408051602081019091526000815261012b61012536849003840184610ab3565b82610226565b5050565b60408051602081019091526000815261012b61015036849003840184610b1b565b82610466565b6000610160610807565b60208082015151849052604080519182019052600081526101818282610226565b519392505050565b60006060600054600280805461019e90610b53565b80601f01602080910402602001604051908101604052809291908181526020018280546101ca90610b53565b80156102175780601f106101ec57610100808354040283529160200191610217565b820191906000526020600020905b8154815290600101906020018083116101fa57829003601f168201915b50505050509050915091509091565b61023660046000541460106105e2565b815161025190158061024a57508251600154145b60116105e2565b60008080556002805461026390610b53565b80601f016020809104026020016040519081016040528092919081815260200182805461028f90610b53565b80156102dc5780601f106102b1576101008083540402835291602001916102dc565b820191906000526020600020905b8154815290600101906020018083116102bf57829003601f168201915b50505050508060200190518101906102f49190610c2d565b905061031d60408051608081018252600060208201818152928201819052606082015290815290565b60408051338152855160208083019190915286015151518183015290517f7d66d73ff83563156ca4ecd3b15e845da66b8d82f7da365588d378ce806c89ae9181900360600190a1602082810151515190850151515161037f911015600e6105e2565b60208401515151610393903414600f6105e2565b604051600081527fb80ccc8ed4515426f25edb50db8262a17b9b7d5da5b4733026b7935fdc0c28de9060200160405180910390a16000835260208481015151519083015151516103e39190610ca9565b8151526020828101805151820151835183015251516040908101518351901515910152825190850151515161041a91903390610608565b610422610839565b825181516001600160a01b039091169052602080820151439052830151825161044e9190600090610621565b602080830151015261045f81610695565b5050505050565b610476600160005414600c6105e2565b815161049190158061048a57508251600154145b600d6105e2565b6000808055600280546104a390610b53565b80601f01602080910402602001604051908101604052809291908181526020018280546104cf90610b53565b801561051c5780601f106104f15761010080835404028352916020019161051c565b820191906000526020600020905b8154815290600101906020018083116104ff57829003601f168201915b50505050508060200190518101906105349190610cc0565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a161058b3415600a6105e2565b80516105a3906001600160a01b03163314600b6105e2565b6105ab610839565b60208083015182516001600160a01b039091169052818101805143905260408401519051909101526105dc81610695565b50505050565b8161012b5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6106138383836106f4565b61061c57600080fd5b505050565b61062961085a565b60005b60018110156106755784816001811061064757610647610c7d565b602002015182826001811061065e5761065e610c7d565b60200201528061066d81610d0f565b91505061062c565b508181846001811061068957610689610c7d565b60200201529392505050565b61069d6108a5565b8151516001600160a01b03168152602080830151810151818301526004600055436001556040516106d091839101610d2a565b6040516020818303038152906040526002908051906020019061061c9291906108c8565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161075391610d88565b60006040518083038185875af1925050503d8060008114610790576040519150601f19603f3d011682016040523d82523d6000602084013e610795565b606091505b50915091506107a6828260026107c5565b50808060200190518101906107bb9190610da4565b9695505050505050565b606083156107d4575081610800565b8251156107e45782518084602001fd5b60405163100960cb60e01b8152600481018390526024016105ff565b9392505050565b60405180604001604052806000815260200161083460408051808201909152600060208201908152815290565b905290565b6040805160608101825260009181019182529081526020810161083461094c565b60405180602001604052806001905b61088f604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816108695790505090565b604051806040016040528060006001600160a01b0316815260200161083461085a565b8280546108d490610b53565b90600052602060002090601f0160209004810192826108f6576000855561093c565b82601f1061090f57805160ff191683800117855561093c565b8280016001018555821561093c579182015b8281111561093c578251825591602001919060010190610921565b50610948929150610966565b5090565b60405180604001604052806000815260200161083461085a565b5b808211156109485760008155600101610967565b60006040828403121561098d57600080fd5b50919050565b6000604082840312156109a557600080fd5b610800838361097b565b6000602082840312156109c157600080fd5b5035919050565b60005b838110156109e35781810151838201526020016109cb565b838111156105dc5750506000910152565b8281526040602082015260008251806040840152610a198160608501602087016109c8565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610a6757610a67610a2e565b60405290565b6040516020810167ffffffffffffffff81118282101715610a6757610a67610a2e565b6040516060810167ffffffffffffffff81118282101715610a6757610a67610a2e565b60008183036040811215610ac657600080fd5b610ace610a44565b833581526020601f1983011215610ae457600080fd5b610aec610a6d565b9150610af6610a6d565b602094850135815282529283015250919050565b8015158114610b1857600080fd5b50565b600060408284031215610b2d57600080fd5b610b35610a44565b823581526020830135610b4781610b0a565b60208201529392505050565b600181811c90821680610b6757607f821691505b6020821081141561098d57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610b9f57600080fd5b919050565b600082601f830112610bb557600080fd5b610bbd610a6d565b80606080850186811115610bd057600080fd5b855b81811015610c2157828189031215610bea5760008081fd5b610bf2610a90565b8151815260208083015181830152604080840151610c0f81610b0a565b90830152908652909401938201610bd2565b50919695505050505050565b600060808284031215610c3f57600080fd5b6040516040810181811067ffffffffffffffff82111715610c6257610c62610a2e565b604052610c6e83610b88565b8152610b478460208501610ba4565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082821015610cbb57610cbb610c93565b500390565b600060a08284031215610cd257600080fd5b610cda610a90565b610ce383610b88565b8152610cf160208401610b88565b6020820152610d038460408501610ba4565b60408201529392505050565b6000600019821415610d2357610d23610c93565b5060010190565b81516001600160a01b0316815260208083015160808301919081840160005b6001811015610d7e57825180518352848101518584015260409081015115159083015291830191606090910190600101610d49565b5050505092915050565b60008251610d9a8184602087016109c8565b9190910192915050565b600060208284031215610db657600080fd5b815161080081610b0a56fea2646970667358221220687dedd856eec5d874fdcb68a1f97e412568091f7135ec07de670813d927b9e064736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea26469706673582212209032742da64eaf3356c6a58ddce44abae86a4c65c60e23dc70b933bee44a1af164736f6c634300080c0033`,
  BytecodeLen: 10272,
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
