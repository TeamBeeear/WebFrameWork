# WebFrameWork A반 2팀
</br>

## 1. 파일 다운 받은 후, 압축 풀기
파일명은`gomgom-0.0.1-SNAPSHOT.jar`

## 2. jar 파일 다운 받은 경로로 이동 (터미널 이용)
예) 다운로드 폴더에 jar 파일 다운 받은 경우
````
cd Downloads
````

## 3. jar 파일 실행 
### 3-(1) 포그라운드 실행 (로그 볼 수 있음, 하지만 해당 터미널 종료시키면 테스트 불가능)
````
java -jar gomgom-0.0.1-SNAPSHOT.jar
````
### 3-(2) 백그라운드 실행 (백그라운드로 돌아가서 로그는 못봄, 터미널 종료해도 계속 테스트 가능)
````
nohup java –jar gomgom-0.0.1-SNAPSHOT.jar &
````

터미널 끄면 API도 종료, 테스트 할 경우 위의 과정 필요
</br>
이후 테스트 진행
