import { requestGET, requestPOST } from '../utils/api.js'
import Editor from './Editor/index.js'
import Sidebar from './Sidebar/index.js'

export default function App({ $target }) {
  this.state = {
    selectedDocumentId: null,
    title: '',
    content: '',
  }

  this.setState = (nextState) => {
    this.state = nextState
    const { selectedDocumentId, title, content } = this.state
    editor.setState({
      title,
      content,
      selectedDocumentId,
    })
  }

  new Sidebar({
    $target,
    initialState: [],
    onDocumentClick: async (selectedDocumentId) => {
      const selectedDocument = await requestGET(
        `/documents/${selectedDocumentId}`,
      )

      this.setState({
        selectedDocumentId,
        title: selectedDocument.title,
        content: selectedDocument.content,
      })
    },
    onAddDocument: async (document) => {
      history.pushState(null, null, '/documents/new')

      const createdDocument = await requestPOST('/documents', document)

      history.replaceState(null, null, `/documents/${createdDocument.id}`)

      this.setState({
        ...this.state,
        selectedDocumentId: createdDocument.id,
      })
    },
  })

  const editor = new Editor({
    $target,
    initialState: {
      selectedDocumentId: this.state.selectedDocumentId,
      title: 'Untitled',
      content: '',
    },
  })

  const init = () => {
    const { pathname } = location
    const [, , selectedDocumentId] = pathname.split('/')

    if (selectedDocumentId) {
      this.setState({ selectedDocumentId })
    }
  }

  init()
}
