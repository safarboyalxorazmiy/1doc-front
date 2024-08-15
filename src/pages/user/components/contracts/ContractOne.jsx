import { Container, Row, Col, Form } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useRef, useState } from 'react';

const ContractOne = observer(() => {
  const editorRef = useRef(null);
  const [htmlContent, setHtmlContent] = useState('');

  const handleCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    setHtmlContent(editorRef.current.innerHTML);
  };

  const insertTab = () => {
    document.execCommand('insertHTML', false, '&#009;');
    setHtmlContent(editorRef.current.innerHTML);
  };

  const applyFlexCenter = () => {
    const selectedText = window.getSelection();
    if (selectedText.rangeCount > 0) {
      const range = selectedText.getRangeAt(0);
      const span = document.createElement('span');
      span.className = 'd-flex justify-content-center align-items-center';
      range.surroundContents(span);
      setHtmlContent(editorRef.current.innerHTML);
    }
  };

  const applyFlexBetween = () => {
    const selectedText = window.getSelection().toString().split(' ');
    if (selectedText.length > 1) {
      const range = window.getSelection().getRangeAt(0);
      const div = document.createElement('div');
      div.className = 'd-flex justify-content-between align-items-center';
      selectedText.forEach(text => {
        const span = document.createElement('span');
        span.textContent = text;
        div.appendChild(span);
      });
      range.deleteContents();
      range.insertNode(div);
      setHtmlContent(editorRef.current.innerHTML);
    }
  };


  return (
      <Container fluid>
        <Row className='mx-2'>
          <Col xxl={4} xl={4} lg={4} md={4} sm={4}>
            <div>
              1
            </div>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={8} sm={8}>
            <div className="editor-container">
              <div className="toolbar">
                <button onClick={() => handleCommand('bold')}>Bold</button>
                <button onClick={() => handleCommand('italic')}>Italic</button>
                <button onClick={() => handleCommand('underline')}>Underline</button>
                <button onClick={() => handleCommand('fontName', 'Arial')}>Arial</button>
                <button onClick={() => handleCommand('fontName', 'Courier New')}>Courier</button>
                <button onClick={() => handleCommand('fontSize', '1')}>Font Size 1</button>
                <button onClick={() => handleCommand('fontSize', '3')}>Font Size 3</button>
                <button onClick={() => handleCommand('foreColor', '#FF0000')}>Red Text</button>
                <button onClick={() => handleCommand('foreColor', '#0000FF')}>Blue Text</button>
                <button onClick={() => handleCommand('hiliteColor', '#FFFF00')}>Yellow Highlight</button>
                <button onClick={() => handleCommand('hiliteColor', '#00FF00')}>Green Highlight</button>
                <button onClick={() => handleCommand('insertParagraph')}>Insert Paragraph</button>
                <button onClick={() => handleCommand('justifyLeft')}>Align Left</button>
                <button onClick={() => handleCommand('justifyCenter')}>Align Center</button>
                <button onClick={() => handleCommand('justifyRight')}>Align Right</button>
                <button onClick={() => handleCommand('justifyFull')}>Justify</button>
                <button onClick={() => handleCommand('indent')}>Indent</button>
                <button onClick={() => handleCommand('outdent')}>Outdent</button>
                <button onClick={applyFlexCenter}>Apply Flex Center</button>
                <button onClick={applyFlexBetween}>Apply Flex Between</button>
                <button onClick={insertTab}>Insert Tab</button>
              </div>
              <div
                ref={editorRef}
                className="editor"
                contentEditable
                suppressContentEditableWarning
                onInput={() => setHtmlContent(editorRef.current.innerHTML)}
              >
              </div>
              <div className="html-content">
                <h3>HTML Content</h3>
                <div>{htmlContent}</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
  );
});

export default ContractOne;