import React from 'react';
import {View} from 'react-native';
import {MediumText, RegularText} from 'components/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import moment from 'moment';
import Colors from 'theme/colors';
import {currencyFormatter} from 'util';
import _ from 'lodash';

export default ({ type, code, createdAt, amount, description }) => {
  return (
    <View
      style={{
        width: '100%',
        borderRadius: RFValue(10),
        paddingVertical: RFValue(13),
        paddingHorizontal: RFValue(16),
        marginBottom: RFValue(10),
        backgroundColor: Colors.black,
      }}
    >
      <MediumText customstyle={{ color: '#FFF', fontSize: RFValue(18) }}>{`${_.capitalize(
        type
      )}: ₦ ${currencyFormatter(amount)}`}</MediumText>
      <RegularText customstyle={{ color: '#FFF', fontSize: RFValue(14) }}>{`#${code}`}</RegularText>
      <RegularText
        customstyle={{ color: '#FFF', fontSize: RFValue(14) }}
      >{`${description}`}</RegularText>
      <RegularText customstyle={{ color: '#FFF', fontSize: RFValue(14) }}>
        {moment(createdAt).format('dddd, MMMM Do YYYY, h:mm a')}
      </RegularText>
    </View>
  );
};
