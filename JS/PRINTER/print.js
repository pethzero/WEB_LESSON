printZpl(str) {
    let content = str;
    try {
      let oIframe = document.getElementById('print_label') as HTMLIFrameElement;

      oIframe.contentWindow.addEventListener('afterprint', (evt) => {
        console.log('test')
      });
      var oDoc = (oIframe.contentDocument);
      oDoc.write(`<head><title>title</title> <style>
      @media print {
        @page {
          size: A3;
        }
    }
    </style>`);
      oDoc.write(`</head><body onload="this.focus(); this.print();"><p>`);
      oDoc.write(content.split(' ').join('&nbsp;') + '</p></body>');
      oDoc.close();
    } catch (e) {
      // console.log(e)
      self.print();
    }
  }
