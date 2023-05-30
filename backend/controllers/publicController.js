const index = (req, res) => {
    
    return res.send('hp');
}

const sport = (req, res) => {
    return res.json({data: [ 'reshma', 'islame' ]})
}

export { index, sport };