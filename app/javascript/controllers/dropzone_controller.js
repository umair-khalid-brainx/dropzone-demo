// app/javascript/controllers/dropzone_controller.js
import { Controller } from "@hotwired/stimulus";
import Dropzone from "dropzone";

export default class extends Controller {
  static values = {
    postId: String
  }

  connect() {
    const dropzoneConfig = {
      url: this.url,
      method: "put",
      clickable: true,
      paramName: "picture",
      maxFilesize: 256,
      parallelUploads: "5",
      addRemoveLinks: true,
      acceptedFiles: ".jpg, .jpeg, .png",
      maxFiles: 10,
      headers: {
        "X-CSRF-Token": document.querySelector("meta[name=csrf-token]").content,
      },
    };

    this.dropzone = new Dropzone(this.element, dropzoneConfig);
  }

  get url() {
    return `/posts/${this.postIdValue}`;
  }
}