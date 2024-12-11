import { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";

const PDFViewer = ({ url }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadPDF = async () => {
      const pdf = await pdfjsLib.getDocument(url).promise;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 1 });
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({
        canvasContext: context,
        viewport,
      }).promise;
    };

    if (url) loadPDF();
  }, [url]);

  return <canvas ref={canvasRef}></canvas>;
};

export default PDFViewer;
