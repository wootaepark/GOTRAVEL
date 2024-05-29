library(plumber)

# Plumber API 설정
r <- plumb("model.R")
r$run(host = "0.0.0.0", port = 3001)
