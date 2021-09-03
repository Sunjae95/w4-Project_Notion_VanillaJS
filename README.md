# 노션 클로닝 프로젝트

![20210903_234835](https://user-images.githubusercontent.com/44149596/132024922-46a1f283-4e13-4932-a002-46a3d07f9487.png)
![20210903_234812](https://user-images.githubusercontent.com/44149596/132024972-31fbf516-87c5-427b-81d6-4e301dd4757c.png)

## 👩‍💻 요구 사항과 구현 내용

## 기본 요구사항

바닐라 JS만을 이용해 노션을 클로닝합니다.

기본적인 레이아웃은 노션과 같으며, 스타일링, 컬러값 등은 원하는대로 커스텀합니다.

- [ ] 글 단위를 Document라고 합니다. Document는 Document 여러개를 포함할 수 있습니다.
- [ ] 화면 좌측에 Root Documents를 불러오는 API를 통해 루트 Documents를 렌더링합니다.
  - [ ] Root Document를 클릭하면 오른쪽 편집기 영역에 해당 Document의 Content를 렌더링합니다.
  - [ ] 해당 Root Document에 하위 Document가 있는 경우, 해당 Document 아래에 트리 형태로 렌더링 합니다.
  - [ ] Document Tree에서 각 Document 우측에는 + 버튼이 있습니다. 해당 버튼을 클릭하면, 클릭한 Document의 하위 Document로 새 Document를 생성하고 편집화면으로 넘깁니다.
- [x] 편집기에는 기본적으로 저장 버튼이 없습니다. Document Save API를 이용해 지속적으로 서버에 저장되도록 합니다.
- [x] History API를 이용해 SPA 형태로 만듭니다.
  - [x] 루트 URL 접속 시엔 별다른 편집기 선택이 안 된 상태입니다.
  - [x] /documents/{documentId} 로 접속시, 해당 Document 의 content를 불러와 편집기에 로딩합니다.

## ✅ 피드백 반영사항

-노션 클로닝을 목표로 시작했지만, 결과물은 아직 노션의 'ㄴ'에도 미치지 못합니다.

- Week3: Simple To-do List 에서 가장 지적을 많이 받았던 요소는 '코드의 난잡함'이었습니다. 이에 **Prettier** 확장 프로그램을 이용하여 일관된 코드 스타일을 유지하는 데 신경썼습니다.

- 저번 과제를 하면서 컴포넌트에 충분히 이해했다고 생각했지만, 컴포넌트의 개수가 많아지고, 중첩되다 보니 이를 다루는 것이 쉽지 않았습니다. 컴포넌트의 구조를 철저하게 다시 분석한 후, 프로젝트를 보완할 예정입니다.

- API 사용이 많이 미숙했습니다. GET이 무엇인지, POST가 무엇인지에 대해 머리로는 알지만, 막상 코드로 작성할 때는 기억이 나지 않았습니다. 과제에 제공된 API 를 포함하여 다른 API들도 사용해 보면서 RESTful API에 대한 학습을 진행할 계획입니다.
-

## ✅ 대대적인 보완 계획

- **[2주일의 유예기간]** 스스로에게 너무나도 민망하고 부끄러워 견딜 수가 없습니다. 최대 2주의 일정으로, 어엿한 노션 클로닝프로젝트로 탈바꿈 시키겠습니다. 기다려주세요 팀원분들!
- **[글 Tree 구조로 나열하기]** 현재 Document 안에 Document가 들어가 있지 않습니다. Document를 트리구조로 변환하는 기능을 추가할 예정입니다.
- **[레이아웃 수정]** 레이아웃을 노션처럼 수정
- **[글 삭제기능 추가]** 테스트를 하며 서버에 저장한 수많은 제 글을 지우고 싶지만, 삭제기능이 구현되지 않아 박제가 되어버렸습니다. 삭제기능을 추가하여 바람직한 글만 서버에 저장할 수 있도록 할 예정입니다.

## ✅ PR 포인트 & 궁금한 점

- 저만의 구현 내용이 너무 적어 민망할 따름입니다. 리뷰를 받는다는 것 자체가 부끄러울 것 같아요. 하지만 2주 뒤, 멋지게 개선된 제 프로젝트를 감상하러 꼭 방문해 주시기 바랍니다.
