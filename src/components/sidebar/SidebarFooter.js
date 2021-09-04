import { $createElement } from '../../utils/templates.js';

export default function SidebarFooter({ $target, onClick }) {
	const $footer = $createElement('div', '.sidebar-footer');
	const $createBtn = $createElement('span', '.create-btn');
	$createBtn.setAttribute('data-target', 'modal');
	$createBtn.textContent = '+ 새 페이지';

	$footer.appendChild($createBtn);
	$target.appendChild($footer);

	this.init = () => {
		$createBtn.addEventListener('click', e => {
			onClick.createDocument();
		});
	};

	this.init();
}
