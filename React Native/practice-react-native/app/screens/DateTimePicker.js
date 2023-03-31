import React, { useState } from "react";
import { Button, Pressable, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { Clock, DigitalClock } from "react-native-clocks";
import AnalogClock from "react-native-clock-analog";
import AppAnalog from "../components/AppAnalog";

const DTPM = () => {
  const [time, setTime] = useState(new Date());
  //   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  //   const showDatePicker = () => {
  //     setDatePickerVisibility(true);
  //   };

  //   const hideDatePicker = () => {
  //     setDatePickerVisibility(false);
  //   };

  //   const handleConfirm = (date) => {
  //     console.warn("A date has been picked: ", date);
  //     hideDatePicker();
  //   };
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  console.log("====================================");

  console.log(hours);
  console.log(minutes);
  console.log(seconds);
  console.log("====================================");
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      {/* <Button title="Show Date Picker" />
      <Clock
        onPress={() => {
          DateTimePickerAndroid.open({
            mode: "time",
            onChange: (time) => {
              console.log("Changed");
              console.log(time);
            },
            value: new Date(),
          });
          // DateTimePickerAndroid.dismiss(mode: AndroidNativeProps['mode'])
        }}
      />
      <DigitalClock /> */}
      <Pressable
        onPress={() => {
          DateTimePickerAndroid.open({
            mode: "time",
            onChange: (time) => {
              console.log("Changed");
              setTime(new Date(time.nativeEvent.timestamp));
            },
            value: new Date(),
          });
          // DateTimePickerAndroid.dismiss(mode: AndroidNativeProps['mode'])
        }}
      >
        {/* <AnalogClock
          key={12}
          size={100}
          hour={hours}
          colorMinutes="#FF8F00"
          minutes={minutes}
          seconds={seconds}
        /> */}

        <AppAnalog
          hour={hours}
          minutes={minutes}
          seconds={seconds}
          showSeconds={true}
          size={100}
        />
      </Pressable>
      {/* <DateTimePicker value={new Date()} mode="date" /> */}
    </View>
  );
};

export default DTPM;
