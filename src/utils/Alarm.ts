class Alarm {
  private vNode = null;

  setAlarmBarNode = vNode => {
    this.vNode = vNode;
  };

  showAlarm = text => {
    this.vNode?.showAlarm(text);
  };
}

export default new Alarm();
