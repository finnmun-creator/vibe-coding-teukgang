# Git 기초

> 출처: https://www.max5.ai/series/vibe-coding/part-2/08-git-basics

---

## Git = 게임 세이브 시스템

RPG 게임에서 보스를 잡기 전에 '저장(Save)'하듯, 코딩도 동일합니다.

"자, 이제 로그인 기능을 건드릴 건데, 망치면 귀찮으니까 여기서 일단 저장!"

이를 전문 용어로 **커밋(Commit)**이라고 합니다.

- **게임:** Save Point 1
- **코딩:** Commit ID (a1b2c3d...)

**Commit = 세이브 포인트 찍기**

## 학습 목표

- 코드를 '세이브(Commit)'할 수 있다
- Git이 게임 세이브와 동일하다는 것을 이해한다
- GitHub에 '내 코드 저장소'를 만들 수 있다

---

## 1단계: 세이브 포인트 만들기 (로컬 저장)

### 1. Git 시작하기

```bash
git init
```

`Initialized empty Git repository`가 뜨면 성공.

### 2. 세이브할 파일 고르기

```bash
git add .
```

점 `.`은 "모든 파일 다 담아!"

### 3. 세이브하고 이름 붙이기 (Commit)

```bash
git commit -m "첫 번째 세이브: 안녕 파일 생성"
```

---

## 2단계: 구름 위에 저장하기 (GitHub)

1. GitHub 회원가입
2. `+` → `New repository` → 이름 짓기 → `Create repository`
3. 아래 3줄을 터미널에 붙여넣기:

```bash
git remote add origin https://github.com/... (주소)
git branch -M main
git push -u origin main
```

---

## 정리: 3단계 주문

1. **담기:** `git add .`
2. **저장:** `git commit -m "뭐뭐 수정했음"`
3. **올리기:** `git push`

```
add → commit → push
(담고 → 찍고 → 밀고)
```

**이것만 알면 코드는 절대 날아가지 않습니다.**

## 셀프체크

- Git에서 '세이브'하는 행위를 뭐라고 하나요? → Commit
- 내 컴퓨터의 코드를 GitHub로 올리는 명령어는? → git push
- 세이브할 파일을 선택하는 명령어는? → git add
