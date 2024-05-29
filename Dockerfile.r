# R 베이스 이미지 사용
FROM rocker/r-ver:latest

# 필요한 R 패키지 설치
RUN R -e "install.packages(c('plumber'))"

# API 코드 복사
COPY api.R /api.R
COPY model.R /model.R

# API 포트 노출
EXPOSE 3001

# Plumber API 실행
CMD ["Rscript", "/api.R"]
