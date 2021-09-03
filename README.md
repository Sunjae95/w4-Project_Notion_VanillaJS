# 노션 클로닝 프로젝트

## 기본 요구사항

바닐라 JS만을 이용해 노션을 클로닝합니다.

기본적인 레이아웃은 노션과 같으며, 스타일링, 컬러값 등은 원하는대로 커스텀합니다.

- [x] 단위를 Document라고 합니다. Document는 Document 여러개를 포함할 수 있습니다.

- [x] 화면 좌측에 Root Documents를 불러오는 API를 통해 루트 Documents를 렌더링합니다.

- [x] Root Document를 클릭하면 오른쪽 편집기 영역에 해당 Document의 Content를 렌더링합니다.

- [x] 해당 Root Document에 하위 Document가 있는 경우, 해당 Document 아래에 트리 형태로 렌더링 합니다.

- [x] Document Tree에서 각 Document 우측에는 + 버튼이 있습니다. 해당 버튼을 클릭하면, 클릭한 Document의 하위 Document로 새 Document를 생성하고 편집화면으로 넘깁니다.

- [x] 편집기에는 기본적으로 저장 버튼이 없습니다. Document Save API를 이용해 지속적으로 서버에 저장되도록 합니다.

- [x] istory API를 이용해 SPA 형태로 만듭니다.

- [x] 루트 URL 접속 시엔 별다른 편집기 선택이 안 된 상태입니다.

- [ ] /documents/{documentId} 로 접속시, 해당 Document 의 content를 불러와 편집기에 로딩합니다.

## 보너스 요구사항

- [x] 기본적으로 편집기는 textarea 기반으로 단순한 텍스트 편집기로 시작하되, 여력이 되면 div와 contentEditable을 조합해서 좀 더 Rich한 에디터를 만들어봅니다.

- [ ] 편집기 최하단에는 현재 편집 중인 Document의 하위 Document 링크를 렌더링하도록 추가합니다.

- [ ] 편집기 내에서 다른 Document name을 적은 경우, 자동으로 해당 Document의 편집 페이지로 이동하는 링크를 거는 기능을 추가합니다.

- 그외 개선하거나 구현했으면 좋겠다는 부분이 있으면 적극적으로 구현해봅니다!
  - [x] 유사md파일 구현하기

## 고민했던 부분

- app.js에서 모든 상태를 관리하고 싶었습니다.

  - 이때 사이드바의 상태가 바뀌면 전체 상태가 바뀌게 되기 떄문에 content 또한 렌더링이되는 상황이 발생했습니다.

  - 또한 content를 수정하는것임에도 사이드 또한 렌더링되는 문제점이 있었습니다.

    `해결 방법`

    - app에서는 단순히 렌더링만 진행하였고, 사이드바와 content의 데이터를 분리했습니다.

- 이럴 경우 content의 제목이 변경될 때 사이드바도 변경되어야 하는데 상태를 모르기 때문에 렌더링이 되지 않는다는 문제가 존재했습니다. (사이드바에서 새로운 데이터를 추가했는데, content가 렌더링되지 않는 문제도 존재합니다.)

  `해결 방법`

  - customEvent를 통하여 content의 제목이 변경되거나, 사이드바에서 새로운 content를 만들 때의 핸들러를 만들어주었습니다.

- content를 변경한후 다른 content를 선택하면 뒤에 선택한 content의 id로 데이터가 변경됩니다.

  ​ `해결 방법`

  - 스크럼때 클로저를 활요해서 해결했다는 조언을 듣고 난 후 클로저를 활용해 에러를 수정하였습니다.

- content의 헤더를 변경할 때 사이드바 또한 자연스럽게 동시에 바뀌게 하고 싶었습니다.

  - content의 헤더 또한 1초 후 렌더링이 되게 하였기 때문에 이를 없앴습니다.

  - 이때 헤더에 key 이벤트가 발생할 때마다 sidebar가 렌더링이 됩니다.

  - 많은 렌더링이 발생해서 웹이 뻗어버렸습니다.

    `해결방법`

    - 헤더에 키 이벤트가 발생한다면, api를 호출하지만, 사이드바 전체 렌더링은 되지 않도록 하였습니다.
    - 다만, 사용자가 알 수 있도록 변경된 헤더의 innerText만 같이 변경하게 하여 렌더링을 최소화하였습니다.

## 추가해야할 부분

- 구현하는데 급해서, 시멘틱한 웹을 만들지 못했습니다...

  - 무분별한 div사용이 된것 같습니다ㅠㅠ

- history Api를 사용했지만, 단순히 사용자에게 화면이 바뀐다는것을 보여주기 위해 사용했습니다

  - 실제로 로직에서의 활용을 어떻게 할지 고민했지만 활용하지 못했습니다.

- 새로고침

  - document를 불러온 후 새로고침을 한다면 index.html을 불러오기 때문에 기존의 상태를 가져오지 못합니다.
  - 펼쳐져 있던 사이드바가 전부 접혀버립니다.
