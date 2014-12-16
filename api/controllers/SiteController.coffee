module.exports =
  index: (req, res) ->
    base = req.headers.host
    res.view "homepage",
      base:base

  test: (req, res) ->
    LogTrigger.find().exec (err, data) ->
      res.json data


