import { QRCodeCanvas } from "qrcode.react";
import React, { useId, useState } from "react";
import { generateQrCodeValue } from "../utils/uuid";
import { Button } from "reactstrap";
import styled from "styled-components";

const Container = styled.div`
  flex-direction: row;
`;

const Controller = styled(Button)`
  width: 150px;
`;

const QrCodeContainer: React.FC = () => {
  const qrCodeId = useId();
  const [value, setValue] = useState<string>(generateQrCodeValue());

  const generateNewCode = () => {
    setValue(generateQrCodeValue());
  };

  const getUnixTimestamp = (): number => {
    const date = new Date();
    return Math.floor(date.getTime() / 100);
  };

  const onClickDownload = () => {
    const canvas = document.getElementById(qrCodeId) as HTMLCanvasElement;
    const link = document.createElement("a");
    link.download = `qrcode-${getUnixTimestamp()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    generateNewCode();
  };

  const onClickCopy = () => {
    const canvas = document.getElementById(qrCodeId) as HTMLCanvasElement;
    canvas.toBlob((blob) => {
      if (blob) {
        navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
      }
    });
    generateNewCode();
  };

  return (
    <Container>
      <div>
        <QRCodeCanvas
          includeMargin
          id={qrCodeId}
          value={value}
          size={256}
          level={"H"}
        />
      </div>
      <div className="mt-4">
        <Controller color="primary" onClick={onClickDownload}>
          Download
        </Controller>
        <span className="px-3 text-black">or</span>
        <Controller color="success" onClick={onClickCopy}>
          Copy
        </Controller>
      </div>
    </Container>
  );
};

export default QrCodeContainer;
