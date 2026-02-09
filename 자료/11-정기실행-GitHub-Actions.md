# 정기 실행 (GitHub Actions)

> 출처: https://www.max5.ai/series/vibe-coding/part-6/28-scheduled-tasks

---

> "코드도 다 짰고, 슬랙으로도 잘 와요. 근데 매일 아침 9시에 컴퓨터 켜서 실행 버튼 누르는 게 귀찮아요."

진정한 자동화는 컴퓨터가 꺼져 있어도 자동으로 실행되는 것입니다.

## 학습 목표

- 컴퓨터가 꺼져 있어도 코드가 자동 실행되게 설정
- GitHub Actions가 무엇인지 이해
- Cron 타이머를 설정하여 특정 시간에 실행

---

## 1. GitHub Actions: 깃허브가 빌려주는 컴퓨터

GitHub는 "네가 원하면 내 컴퓨터를 빌려줄게" 기능이 있습니다.

작업 지시서(Workflow)를 작성: "매일 아침 9시에, 내 코드를 다운받아서, `node index.js`를 실행해줘."

---

## 2. Cron 시간 설정의 주의점

GitHub 컴퓨터는 영국 시간(UTC) 사용. 한국(KST)은 +9시간.

- 한국 아침 9시 = UTC 0시 → `cron: '0 0 * * *'`
- 한국 오후 2시 = UTC 5시

---

## 3. 실전: 자동화 완성

### 1단계: 워크플로우 파일 작성

`.github/workflows/daily.yml` 파일을 AI에게 요청.

### 2단계: 비밀값 등록 (가장 중요)

`.env` 파일은 GitHub에 올리지 않으므로 GitHub Settings에서 별도 등록:

1. GitHub 저장소 **Settings** 클릭
2. **Secrets and variables** → **Actions**
3. **New repository secret**
4. Name: `SLACK_WEBHOOK_URL`
5. Secret: 실제 주소 붙여넣기

### 3단계: 배포

```bash
git add .
git commit -m "자동화 완성"
git push
```

GitHub Actions 탭에서 초록색 체크(✅)가 나타나면 성공.

---

## 완성!

이제 컴퓨터가 꺼져도, 여행을 가도, 잠을 자도 매일 아침 9시에 자동으로 실행됩니다.

이것이 **"서버리스(Serverless) 자동화"**입니다.

---

## 핵심 정리

✅ **GitHub Actions**: 무료로 빌려 쓰는 클라우드 컴퓨터
✅ **시간 설정**: UTC 기준이라 -9시간 계산 필요
✅ **Secrets**: 비밀번호는 코드가 아니라 Settings 메뉴에 저장

## 셀프 체크

- 한국 오후 2시 실행 → UTC 몇 시? → 05시
- .env의 비밀키를 코드에 적어서 GitHub에 올리면? → 절대 안 됨 / 해킹 위험
- GitHub Actions를 쓰면 내 컴퓨터 켜둬야 하나? → 아니요
