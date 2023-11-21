# WebFrameWork A반 2팀

<br>

### 팀원 구성
| **강민서** | **신승혜** | **이서연** | **임수진** |
| :------: |  :------: | :------: | :------: |
| [<img src="https://avatars.githubusercontent.com/u/98332877?v=4" height=150 width=150> <br/>](https://github.com/MinseoKangQ) | [<img src="https://avatars.githubusercontent.com/u/107299318?v=4" height=150 width=150> <br/>](https://github.com/drimh) | [<img src="https://avatars.githubusercontent.com/u/102959791?v=4" height=150 width=150> <br/>](https://github.com/sycuuui) | [<img src="https://avatars.githubusercontent.com/u/122861956?v=4" height=150 width=150> <br/>](https://github.com/suzinlim) |

<br>

### Back-end 서버 실행 방법 (gomgom-0.0.1-SNAPSHOT.jar.zip)
#### 1) 압축 풀기
파일명은 `gomgom-0.0.1-SNAPSHOT.jar`

<br>

#### 2) jar 파일 다운 받은 경로로 이동 (터미널 이용)
예) 다운로드 폴더에 jar 파일 다운 받은 경우
````
cd Downloads
````

<br>

#### 3) jar 파일 실행 (둘 중 하나 실행)
##### 3-1) 포그라운드 실행 (로그 볼 수 있음, 하지만 해당 터미널 종료시키면 테스트 불가능)
````
java -jar gomgom-0.0.1-SNAPSHOT.jar
````

<br>

##### 3-2) 백그라운드 실행 (백그라운드로 돌아가서 로그는 못 봄, 터미널 종료해도 계속 테스트 가능)
````
nohup java –jar gomgom-0.0.1-SNAPSHOT.jar &
````

* 테스트 할 경우, 위의 과정이 필요
* 터미널 종료하면 API도 함께 종료

<br>
<br>

### Front-end 서버 실행 방법 (TeamBear.zip)

#### 1) `cd gomgom`
zip 파일 압축해제 후 이동

<br>

#### 2) `npm install`
프로젝트에 필요한 패키지를 설치하는 명령

<br>

#### 3) 추가 필요한 패키지 install
```
npm install react-select
```
```
npm install slick-carousel
```
```
npm install react-slick
```
```
npm install axios
```
```
npm install http-proxy-middleware
```
```
npm install react-router-dom
```
<br>

#### 4) `npm start`
서버 실행

<br>
<br>

### 사용한 라이브러리
#### 1) React-Select
고민 카테고리를 정의할 때 react-select 라이브러리 이용
```
npm install react-select
```

<br>

#### 2) React-Slick 
슬라이더를 이용할때 slick-carousel 라이브러리 이용
```
npm install slick-carousel
npm install react-slick
```

<br>

#### 3) Axios
axios 통신을 위해 axios 라이브러리 사용
```
npm install axios
```

<br>

#### 4) Proxy Server 구축
proxy를 사용하기 위해 http-proxy-middleware 라이브러리 사용
```
npm install http-proxy-middleware
```

<br>

#### 5) React Router
라우팅을 이용하기 위해 react-router-dom 라이브러리 사용
```
npm install react-router-dom
```
