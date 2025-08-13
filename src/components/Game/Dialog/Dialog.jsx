import { createEffect } from 'solid-js';

export const Dialog = (props) => {
  let dialog;
  createEffect(() => {
    if (props.isShown) {
      dialog?.showModal();
    } else {
      dialog?.close();
    }
  });

  return (
    <dialog ref={dialog}>
      <div>
        Answered correct/wrong: {props.correct} / {props.fall}
      </div>
      Repeat with incorrect answered words?
      <button value="true" onClick={() => props.onRetry()}>
        Yes
      </button>
      <button value="false" onClick={() => props.onCancel()}>
        No
      </button>
    </dialog>
  );
};
