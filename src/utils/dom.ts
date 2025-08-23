export async function copy(text: string): Promise<string | null> {
  return new Promise((resolve, reject) => {
    if (!navigator.clipboard) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.top = textArea.style.left = '0';
      textArea.style.position = 'fixed';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand('copy');
        resolve(null);
      } catch (err) {
        reject('Exec command copy is not available in thie browser');
      }

      document.body.removeChild(textArea);
    } else {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          resolve(null);
        })
        .catch((err) => {
          reject('Unable to write text into navigator');
        });
    }
  });
}
