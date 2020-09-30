import React from 'react';
import { Header } from '../../common';
import { Row } from 'antd';
import { UploadDocs } from '../../common/';
import { postNewWritingSub } from '../../../api/index';
import { SubmissionModal } from '../../common/index';

const RenderWritingSub = () => {
  const inst =
    'Once you finish writing your story, please take a picture of all your pages and upload them. After all pages are uploaded, click submit.';
  const submissionId = 1;

  return (
    <>
      <Header title="PENCILS READY?" />
      <SubmissionModal instructions={inst} />
      <div className="writing-sub-container">
        <Row className="main-row">
          <p>
            A sidekick does something completely out of character, and everyone
            must figure out why.
          </p>
        </Row>
        <div className="upload">
          <h1>Upload</h1>
          <UploadDocs
            submitButtonClassname="orange-submit-button"
            uploadButtonText="Choose files from your device"
            uploadButtonClassname="uploadButton"
            fileName="writingSub"
            apiAxios={postNewWritingSub}
            submissionId={submissionId}
          />
        </div>
      </div>
    </>
  );
};

export default RenderWritingSub;