# 🦁 LIKELION Git Advanced Assignment

Git 심화 강의에서 배운 내용을 실제 협업 상황을 통해 연습합니다.

이번 과제에서는 다음 내용을 다룹니다.

- Merge Conflict 해결
- Cherry-pick으로 특정 커밋 가져오기
- Reset으로 아직 공유하지 않은 커밋 정리
- Revert로 이미 공유된 커밋 취소

---

# 0. 시작하기

## 1. Repository Fork

이 Repository를 자신의 GitHub 계정으로 Fork합니다.

## 2. Fork한 Repository Clone

```bash
git clone https://github.com/0xwb7/likelion-git-assignment.git
cd likelion-git-assignment
```

## 3. 원본 Repository 등록

Fork한 Repository는 `origin`, 과제 원본 Repository는 `upstream`으로 사용합니다.

```bash
git remote add upstream https://github.com/0xwb7/likelion-git-assignment.git

git fetch upstream
```

확인:

```bash
git remote -v
```

---

# 1. 과제 브랜치

원본 Repository에는 다음 시작 브랜치가 있습니다.

```
mission/conflict/base
mission/conflict/incoming

mission/cherry/target
mission/cherry/wrong

mission/reset/start

mission/revert/start
```

`mission/*` 브랜치에서 직접 작업하지 않습니다.

각 Mission마다 자신의 브랜치를 새로 만들어 작업합니다.

```
submit/conflict
submit/cherry
submit/reset
submit/revert
```

---

# Mission 1. Conflict 해결

## 상황

`MissionCard.jsx`의 제목을 두 개발자가 서로 다르게 수정했습니다.

`mission/conflict/base`

```
Frontend Mission
```

`mission/conflict/incoming`

```
Git Mission
```

두 브랜치를 합치면 Conflict가 발생합니다.

## 시작

```bash
git switch -c submit/conflict upstream/mission/conflict/base
```

## 요구사항

`mission/conflict/incoming`의 변경사항을 현재 브랜치에 Merge하세요.

Conflict를 직접 해결한 뒤 최종 제목을 다음과 같이 만드세요.

```
Frontend Git Mission
```

문제가 발생하면 먼저 상태를 확인합니다.

```bash
git status
```

완료 후 Git Graph를 확인합니다.

```bash
git log --oneline --graph --decorate --all
```

Merge Commit이 정상적으로 만들어져야 합니다.

## 제출

```bash
git push -u origin submit/conflict
```

---

# Mission 2. Cherry-pick

## 상황

출석 체크 버튼 기능이 잘못된 브랜치에 커밋되었습니다.

현재 기능이 존재하는 브랜치:

```
mission/cherry/wrong
```

실제로 기능이 들어가야 하는 브랜치:

```
mission/cherry/target
```

전체 브랜치를 Merge하지 않고 **해당 기능을 구현한 특정 커밋 하나만 가져와야 합니다.**

## 시작

```bash
git switch -c submit/cherry upstream/mission/cherry/target
```

잘못된 브랜치의 Commit History를 확인합니다.

```bash
git log upstream/mission/cherry/wrong --oneline
```

다음 커밋을 찾으세요.

```
feat: add attendance button
```

해당 커밋의 변경사항만 현재 브랜치에 적용합니다.

## 완료 조건

Header에 다음 버튼이 추가되어 있어야 합니다.

```
출석 체크
```

Git History에도 기존 커밋의 변경사항을 기반으로 만들어진 새로운 커밋이 존재해야 합니다.

```bash
git log --oneline --graph --decorate --all
```

## 제출

```bash
git push -u origin submit/cherry
```

---

# Mission 3. Reset

## 상황

하나의 기능을 수정하는 과정에서 두 개의 커밋을 만들었습니다.

하지만 두 커밋은 사실 하나의 작업이므로, **아직 Push하기 전에 하나의 커밋으로 정리**해야 합니다.

## 시작

```bash
git switch -c submit/reset upstream/mission/reset/start
```

## Step 1

`src/components/Header.jsx`의

```
Git Practice
```

를

```
Frontend Session
```

으로 수정하고 다음 메시지로 커밋합니다.

```
feat: update session subtitle
```

## Step 2

같은 부분을 다시

```
Git Advanced Session
```

으로 수정하고 커밋합니다.

```
fix: update session subtitle
```

확인:

```bash
git log --oneline
```

## 요구사항

방금 만든 두 커밋을 하나의 커밋으로 다시 만드세요.

이번 Mission에서는 Interactive Rebase를 사용하지 않고 `reset`을 사용합니다.

변경사항을 잃지 않으면서 커밋만 다시 만들 수 있는 옵션을 판단해 사용하세요.

최종 Commit Message:

```
feat: update Git session subtitle
```

## 완료 조건

두 커밋 대신 하나의 커밋만 존재해야 하며, 최종 코드는 다음 문구를 포함해야 합니다.

```
Git Advanced Session
```

확인:

```bash
git status
git log --oneline
```

## 제출

```bash
git push -u origin submit/reset
```

---

# Mission 4. Revert

## 상황

다음 커밋이 이미 원격 Repository에 공유되었습니다.

```
feat: modify notice
```

이 커밋으로 기존 공지:

```
멋사 프론트 화이팅
```

가

```
메롱
```

로 변경되었습니다.

하지만 이 변경이 잘못되었다는 것이 확인되었습니다.

문제는 이후에 정상적인 Footer 수정 커밋도 추가되었다는 것입니다.

```
A --- B --- C
      ↑     ↑
   잘못된 변경   정상 변경
```

C는 유지하면서 B의 변경사항만 취소해야 합니다.

이미 공유된 History이므로 기존 커밋을 삭제하거나 History를 다시 작성하면 안 됩니다.

## 시작

```bash
git switch -c submit/revert upstream/mission/revert/start
```

Commit History 확인:

```bash
git log --oneline
```

다음 커밋을 찾습니다.

```
feat: modify notice
```

해당 커밋의 변경사항만 취소하세요.

## 완료 조건

`NoticeBanner.jsx`

```
멋사 프론트 화이팅
```

Footer 변경:

```
LIKELION Git Assignment
```

두 상태가 모두 유지되어야 합니다.

Git History에는 기존 잘못된 커밋도 남아 있고, 해당 변경을 취소하는 **새로운 커밋**이 추가되어 있어야 합니다.

```bash
git log --oneline --graph --decorate
```

## 제출

```bash
git push -u origin submit/revert
```

---

# 2. 과제 기록

Repository의 `ASSIGNMENT.md`에 각 Mission에서 사용한 핵심 명령어와 이유를 작성합니다.

```markdown
## Mission 1 - Conflict

### 사용한 핵심 명령어
- git ...
- git ...

### 왜 해당 명령어를 사용했나요?
현재 상황이 ______ 상태였기 때문에 ______ 명령어를 사용했습니다.

## Mission 2 - Cherry-pick

### 사용한 핵심 명령어
- git ...

### 왜 해당 명령어를 사용했나요?
...

## Mission 3 - Reset

### 어떤 reset 옵션을 사용했나요?
...

### 해당 옵션을 선택한 이유는 무엇인가요?
...

## Mission 4 - Revert

### Reset 대신 Revert를 사용한 이유는 무엇인가요?
...
```

각 Mission마다 1~3문장 정도면 충분합니다.

---

# 3. 최종 제출

자신의 Fork Repository에 다음 브랜치가 모두 Push되어 있어야 합니다.

| Mission | 제출 브랜치 |
| --- | --- |
| Conflict | `submit/conflict` |
| Cherry-pick | `submit/cherry` |
| Reset | `submit/reset` |
| Revert | `submit/revert` |

최종적으로 자신의 GitHub Repository 링크를 제출합니다.
