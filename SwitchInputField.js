import React from 'react';
import { View, Text, Switch } from 'react-native';
import styleConstructor from './styleConstructor';

const SwitchInputField = ({styles, onTintColor, thumbTintColor, tintColor, disabled, stateName, label, value, onChange, errors}) => {

  const style = styleConstructor(styles);

  return (
    <View style={style.container}>
      <View style={style.mainQuestionContainer}>
        <View style={style.selectionContainer}>
          <View style={style.labelContainer}>
            <Text style={style.label}>{label}</Text>
          </View>
          <Switch
            disabled={disabled ? disabled : false}
            onValueChange={(val) => onChange(stateName, val)}
            value={value}
            onTintColor={onTintColor ? onTintColor : null}
            thumbTintColor={thumbTintColor ? thumbTintColor : null}
            tintColor={tintColor ? tintColor : null}
          />
        </View>
      </View>
    </View>
  );
};

export default SwitchInputField;