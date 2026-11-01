const search = document.querySelector('#faq-search');
const questions = [...document.querySelectorAll('.question')];
let category = 'all';
function filterQuestions() {
  const query = search.value.trim().toLocaleLowerCase();
  let visible = 0;
  for (const question of questions) {
    const show = (category === 'all' || question.dataset.category === category) && question.textContent.toLocaleLowerCase().includes(query);
    question.hidden = !show;
    if (show) visible++;
  }
  document.querySelector('#faq-count').textContent = `${visible} ${visible === 1 ? 'question' : 'questions'}`;
  document.querySelector('#faq-empty').hidden = visible > 0;
}
if (search) {
  search.addEventListener('input', filterQuestions);
  for (const button of document.querySelectorAll('[data-filter]')) {
    button.addEventListener('click', () => {
      category = button.dataset.filter;
      for (const option of document.querySelectorAll('[data-filter]')) option.setAttribute('aria-pressed', String(option === button));
      filterQuestions();
    });
  }
}
// Native details and all answers remain usable when JavaScript is unavailable.
