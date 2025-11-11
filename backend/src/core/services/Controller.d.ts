type ControllerOutput<T> = {
  returnStatus: boolean;
  returnMessage: string;
  data: T | null;
}

/*-----------------------------------------------------------------------------------------*/

export {
  ControllerOutput
}