const {db} = require ('../config/db.js');

const newaccount = (account) =>{
    return db('account')
    .insert(account)
    .returning('*')
}

const createevent = (event) =>{
    return db('event')
    .insert(event)
    .returning('*')
}

const getAllBands = () => {
    return db('account')
    .select('account_id','entityname')
    .where('type', 'band')
    .orderBy('entityname')
  }

  const getAllVenues = () => {
    return db('account')
    .select('account_id','entityname')
    .where('type', 'venue')
    .orderBy('entityname')
  }

  const getTodaysEvents = () => {
    const today = new Date().toISOString().slice(0, 10);
    return db.from('event as e')
    .select('b.entityname as band','v.entityname as venue')
    .innerJoin('account as b', 'e.band_id', 'b.account_id')
    .innerJoin('account as v', 'e.venue_id', 'v.account_id')
  }

  const getAccount = (id) => {
    return db('account')
    .select('entityname','website', 'typeofmusic', 'address')
    .where({account_id:id})
  }

  const accountEvents = (id) => {
    return db.from('event as e')
    .select('b.entityname as band','v.entityname as venue', 'eventdate')
    .where({band_id:id})
    .orWhere({venue_id:id})
    .innerJoin('account as b', 'e.band_id', 'b.account_id')
    .innerJoin('account as v', 'e.venue_id', 'v.account_id')
  }

module.exports = {newaccount, createevent, getAllBands, getAllVenues, getTodaysEvents, getAccount, accountEvents}