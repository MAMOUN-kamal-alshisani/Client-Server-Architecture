import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  color: "royalblue",
  border: "1px solid #004979",
  background: "#e4e4e4",
  borderRadius: "6px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function Model({ useInfo }) {
  const [showModalInfo, setShowModalInfo] = useState(true);

  return (
    <>
      <Modal
        hideBackdrop
        open={showModalInfo}
        onClose={() => setShowModalInfo(!showModalInfo)}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: "fit-content" }}>
          <h4>
            Thank you for your request. The serverApp received the following
            information and soon will be able to save this data into the
            database:
          </h4>

          <div
            style={{
              paddingTop: "25px",
              textAlign: "center",
              textShadow: "0px 0px 3px white",
              letterSpacing: "1px",
            }}
          >
            <h4
              className="Modal_h4"
              style={{ paddingTop: "5px", textAlign: "center" }}
            >
              <b style={{ fontWeight: "bolder", paddingRight: "2px" }}>
                StrName:
              </b>
              {useInfo[0]?.strName}
            </h4>
            <h4
              className="Modal_h4"
              style={{ paddingTop: "5px", textAlign: "center" }}
            >
              <b style={{ fontWeight: "bolder", paddingRight: "2px" }}>
                DtmDOB:{" "}
              </b>
              {useInfo[0]?.dtmDOB?.slice(0, useInfo[0]?.dtmDOB?.indexOf("T"))}
            </h4>
            <h4
              className="Modal_h4"
              style={{ paddingTop: "5px", textAlign: "center" }}
            >
              <b style={{ fontWeight: "bolder", paddingRight: "2px" }}>
                StrEmail:{" "}
              </b>
              {useInfo[0]?.strEmail}
            </h4>
            <h4
              className="Modal_h4"
              style={{ paddingTop: "5px", textAlign: "center" }}
            >
              <b style={{ fontWeight: "bolder", paddingRight: "2px" }}>
                StrPassword:{" "}
              </b>
              {useInfo[0]?.strPassword}
            </h4>
          </div>
          <Button
            onClick={() => {
              setShowModalInfo(!showModalInfo);
              window.location.reload();
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default Model;
