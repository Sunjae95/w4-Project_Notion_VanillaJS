import { $createElement } from '../../utils/templates.js';
import { emit } from '../../utils/emitter.js';

import PageBody from './PostsPageBody.js';

export default function Page({ $target, initialState }) {
	const $page = $createElement('div', '.col', '.page-container');
	const $pageBody = $createElement('div', '.page-body');

	this.state = initialState;
	this.setState = nextState => {
		this.state = nextState;
		pageBody.setState(this.state);
	};

	this.render = () => {
		pageBody.render();
	};

	const LIMIT_TIME = 200;
	let pageBodyUpdateTimer = null;

	const setUpdateEditTimer = (id, nextDocument) => {
		if (pageBodyUpdateTimer) {
			clearTimeout(pageBodyUpdateTimer);
		}
		pageBodyUpdateTimer = setTimeout(() => {
			emit.updateDocument(id, nextDocument);
		}, LIMIT_TIME);
	};

	const pageBody = new PageBody({
		$target: $pageBody,
		initialState,
		onUpdate: {
			updateTitle: nextDocument => {
				const { id } = this.state.currentDocument;
				const currentLi = $(`li[data-id="${id}"] span.nav-page-title`);
				currentLi.textContent = nextDocument.title;

				setUpdateEditTimer(id, nextDocument);
			},
			updateContent: nextDocument => {
				const { id } = this.state.currentDocument;

				setUpdateEditTimer(id, nextDocument);
			},
		},
	});

	$target.appendChild($page);
	$page.appendChild($pageBody);
}
