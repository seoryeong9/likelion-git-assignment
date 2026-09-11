# 과제 기록

이름: 김서령
GitHub ID: seoryeong9

---

## Mission 1 - Conflict

### 사용한 핵심 명령어
- git merge upstream/mission/conflict/incoming
- git status
- git add src/components/MissionCard.jsx
- git commit

### 왜 해당 명령어를 사용했나요?
현재 상황이 두 브랜치가 MissionCard.jsx의 같은 줄을 다르게 수정해서 충돌이 난 상태여서 충돌 마커를 지우고 git add, git commit을 사용했습니다.

---

## Mission 2 - Cherry-pick

### 사용한 핵심 명령어
- git log upstream/mission/cherry/wrong --oneline
- git cherry-pick dbec180

### 왜 해당 명령어를 사용했나요?
출석 체크 버튼 커밋이 잘못된 브랜치에 있고, 그 커밋 하나만 옮겨야 하는 상태였기 때문에 git cherry-pick 명령어를 사용했습니다.

---

## Mission 3 - Reset

### 어떤 reset 옵션을 사용했나요?
--soft

### 해당 옵션을 선택한 이유는 무엇인가요?
아직 push하지 않은 커밋이라 reset을 쓸 수 있었고, 커밋만 취소해서 하나로 다시 커밋하기 위해 --soft를 사용했습니다

---

## Mission 4 - Revert

### Reset 대신 Revert를 사용한 이유는 무엇인가요?
이미 공유된 커밋이라 히스토리를 바꾸면 안되기 때문에 기존은 남기고 되돌리는 새 커밋을 추가하는 revert를 사용했습니다.
