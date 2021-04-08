/**
 * 1. 삭제하기 
 * 2. 수정하기 O
 * 3. 내용 불러오기 O
 */

// 내용 불러오기
function getMemo() {
  // 어떤 메모를 불러올지
  const query = window.location.search;

  const memo_id = query.slice(4);

  const storage = window.localStorage;
  const memo_data = storage.getItem(memo_id);

  if (!memo_data) {
    alert('없는 메모다');
    window.location.replace('/');
  }

  const input_element = document.getElementById('input');
  input_element.value = memo_data;
}

function editMemo() {
  if (!confirm('정말로 수정?')) {
    return;
  }

  const query = window.location.search;
  const memo_id = query.slice(4);

  const form = document.getElementById('edit');
  form.action = `/edit?id=${memo_id}`;
  form.submit(); // /edit로 요청을 보내게 된다
  alert('수정되었다');
}

function deleteMemo() {
  if (!confirm('삭제?')) {
    return;
  }

  const query = window.location.search;
  const memo_id = query.slice(4);

  const form = document.getElementById('delete');
  form.action = `/delete?id=${memo_id}`;
  form.submit(); // /delete?id=~~~~

  alert('삭제완료');
}

function logout() {
  if (!confirm('로그아웃 하십니까?')) {
    return;
  }

  const form = document.getElementById('logout');
  form.submit();
}
