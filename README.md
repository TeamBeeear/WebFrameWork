# WebFrameWork A반 2팀
## 팀원 구성
| **강민서** | **신승혜** | **이서연** | **임수진** |
| :------: |  :------: | :------: | :------: |
| [<img src="https://avatars.githubusercontent.com/u/98332877?v=4" height=150 width=150> <br/>](https://github.com/MinseoKangQ) | [<img src="https://avatars.githubusercontent.com/u/107299318?v=4" height=150 width=150> <br/>](https://github.com/drimh) | [<img src="https://avatars.githubusercontent.com/u/102959791?v=4" height=150 width=150> <br/>](https://github.com/sycuuui) | [<img src="https://avatars.githubusercontent.com/u/122861956?v=4" height=150 width=150> <br/>](https://github.com/suzinlim) |

<br />

# Back-end 연동 방법
## 1. 파일 다운 받은 후, 압축 풀기
파일명은 `gomgom-0.0.1-SNAPSHOT.jar`

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
### 3-(2) 백그라운드 실행 (백그라운드로 돌아가서 로그는 못 봄, 터미널 종료해도 계속 테스트 가능)
````
nohup java –jar gomgom-0.0.1-SNAPSHOT.jar &
````

* 테스트 할 경우, 위의 과정이 필요
* 터미널 종료하면 API도 함께 종료

<br /><br />

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<br /><br />

# 사용한 라이브러리
## 1. React-Select
```
npm install react-select
```
고민 카테고리를 정의할 때 react-select 라이브러리 이용
```
npm install slick-carousel
```
슬라이더를 이용할때 slick-carousel 라이브러리 이용
```
npm install axios
```
axios 통신을 위해 axios 라이브러리 사용
```
npm install http-proxy-middleware
```
proxy를 사용하기 위해 http-proxy-middleware 라이브러리 사용
```
npm install react-router-dom
```
라우팅을 이용하기 위해 react-router-dom 라이브러리 사용
