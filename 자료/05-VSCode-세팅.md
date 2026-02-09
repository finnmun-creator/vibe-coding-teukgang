# VS Code 세팅

> 출처: https://www.max5.ai/series/vibe-coding/part-2/07-vscode-setup

---

## VS Code란?

**VS Code (Visual Studio Code)** = 전문가용 작업 환경. 전 세계 개발자의 70% 이상이 사용.

### 주요 기능
- **자동 완성:** `cl`만 입력해도 `console.log` 추천
- **에러 표시:** 잘못된 문법을 빨간 줄로 표시
- **터미널 내장:** 별도 창 없이 내부에서 사용 가능

## 설치하기

1. VS Code 공식 홈페이지 접속
2. 파란색 'Download' 버튼 클릭
3. 설치 파일 실행 후 '다음, 다음, 완료'

---

## 1단계: VS Code 해부하기

3가지만 알면 됩니다:

1. **탐색기 (왼쪽 바):** 파일 목록 (냉장고)
2. **에디터 (가운데):** 코드 작성 (도마)
3. **터미널 (아래쪽):** 명령어 입력 (가스레인지)

**팁:** 터미널이 보이지 않으면 `Terminal` → `New Terminal` 또는 `Ctrl + `` 단축키

---

## 2단계: 필수 확장 프로그램 설치

### Korean Language Pack
- 검색: `Korean`
- 'Korean Language Pack for Visual Studio Code' 클릭
- 'Install' → 'Restart'

---

## 3단계: 터미널에서 VS Code 열기

```bash
code .
```

`code`는 "VS Code 실행", `.`(점)은 "현재 폴더 열기"

---

## 실습: 파일 만들고 저장하기

1. `code .` 명령어로 VS Code 열기
2. 탐색기 빈 공간 우클릭 → `새 파일`
3. 파일명 입력: `hello.txt`
4. 내용 입력: `안녕하세요! 바이브 코딩입니다.`
5. 저장: `Ctrl + S`

**주의:** 파일명 옆의 동그라미(●)는 저장되지 않은 상태

---

## 정리: 최고의 작업 환경 완성

1. **Claude Code (신입사원)**
2. **터미널 (대화창)**
3. **VS Code (작업대)**

## 셀프체크

- 현재 폴더를 VS Code로 여는 명령어는? → `code .`
- VS Code 화면 구성 3요소는? → 탐색기, 에디터, 터미널
- 파일명 옆의 동그라미(●)는 무슨 뜻? → 저장 안 됨
