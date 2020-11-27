import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class ComingSoonComponentOld extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="6b6f37ba-5f79-4f05-bf00-fbc1a06c2515" style={styles.comingSoon}>
        <ReactImage data-layer="de6f6194-2e95-4f53-834d-e2167cb0e719" source={require('./Assets/Images/rectangle1.png')} style={styles.comingSoon_rectangle1} />
        <Text data-layer="06ef3e2c-b2b0-40f5-b0c8-3b9a13fd02d1" style={styles.comingSoon_fernandoMAraujo}>Fernando M Araujo</Text>
        <ReactImage data-layer="1423c544-a702-496b-bf85-d6b3d1c7abcc" source={require('./Assets/Images/beard.png')} style={styles.comingSoon_beard} />
        <View style={styles.comingSoon_canadaBasedWebDeveloper}><Text data-layer="d89e35b3-acfe-4f46-a997-2468a24661e7" style={{"marginTop":-7,"color":"rgba(255, 255, 255, 1)","fontSize":71,"fontWeight":"700","fontStyle":"normal","fontFamily":"Arial Rounded MT","textAlign":"center","lineHeight":78.10000000000001}}>Canada based Web Developer</Text></View>
        <ReactImage data-layer="34626de2-099a-4026-b7ca-8a50b03fbc99" source={require('./Assets/Images/rectangle2.png')} style={styles.comingSoon_rectangle2} />
        <Svg data-layer="eac5da70-bcd6-47f2-a210-015b9d4d689d" style={styles.comingSoon_union1} preserveAspectRatio="none" viewBox="-0.75 -0.75 861.956787109375 442.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 81 441 C 36.26460266113281 441 0 404.7354125976563 0 360 L 0 81 C 0 36.26460266113281 36.26460266113281 0 81 0 L 603.9999389648438 0 C 648.7352905273438 0 684.9999389648438 36.26460266113281 684.9999389648438 81 L 684.9999389648438 235.1881866455078 L 809.0946044921875 340.5411071777344 L 860.4567260742188 381.5955200195313 L 684.9999389648438 346.1705627441406 L 684.9999389648438 360 C 684.9999389648438 404.7354125976563 648.7352905273438 441 603.9999389648438 441 L 81 441 Z"  /></Svg>
        <Text data-layer="bf129e10-79ae-47e5-b871-0cff351f7ab0" style={styles.comingSoon_aFullBlownPortfolioSiteIsComingVerySoonIveJustBeenBusyGiveABeardABreak}>A full blown portfolio site is coming 
very soon! I've just been busy, give a beard a break!</Text>
        <Text data-layer="18f5e928-5df9-41f1-a9b3-02eda1c02d6e" style={styles.comingSoon_ifYouWannaKeepUpWithMeOrWannaSayHiCheckOutTheLinksBelowOrGetInTouchOnFernandomatosaraujo}>If you wanna keep up with me or wanna say hi, check out the links below or get in touch on fernandomatosaraujo@gmail.com</Text>
        <Text data-layer="5389aa22-aaf9-465d-b726-9a06e82046a2" style={styles.comingSoon_x1041cfc5}></Text>
        <Text data-layer="ab4851a4-0d5d-47d0-867a-5992556cf773" style={styles.comingSoon_x323edec9}></Text>
    </ScrollView>
    );
  }
}

ComingSoon.propTypes = {

}

ComingSoon.defaultProps = {

}


const styles = StyleSheet.create({
  "comingSoon": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1920,
    "height": 1080,
    "left": 0,
    "top": 0
  },
  "comingSoon_rectangle1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 1920,
    "height": 1080,
    "left": 0,
    "top": 0
  },
  "comingSoon_fernandoMAraujo": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 144,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Script MT",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1920,
    "height": 190,
    "left": 0,
    "top": 14
  },
  "comingSoon_beard": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 497,
    "height": 670,
    "left": 1338,
    "top": 356
  },
  "comingSoon_canadaBasedWebDeveloper": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 71,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Arial Rounded MT",
    "textAlign": "center",
    "lineHeight": 78.10000000000001,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1920,
    "height": 75,
    "left": 0,
    "top": 207.5
  },
  "comingSoon_rectangle2": {
    "opacity": 0.550000011920929,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 65,
    "borderTopRightRadius": 65,
    "borderBottomLeftRadius": 65,
    "borderBottomRightRadius": 65,
    "width": 1102.32,
    "height": 8.34,
    "left": 409,
    "top": 284.11
  },
  "comingSoon_union1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 860.46,
    "height": 441,
    "left": 472,
    "top": 449
  },
  "comingSoon_aFullBlownPortfolioSiteIsComingVerySoonIveJustBeenBusyGiveABeardABreak": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 31,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Times New Roman",
    "textAlign": "center",
    "lineHeight": 43,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 571,
    "height": 133,
    "left": 529.5,
    "top": 471.5
  },
  "comingSoon_ifYouWannaKeepUpWithMeOrWannaSayHiCheckOutTheLinksBelowOrGetInTouchOnFernandomatosaraujo": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(253, 73, 73, 1)",
    "fontSize": 21,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Times New Roman",
    "textAlign": "left",
    "lineHeight": 34,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 596,
    "height": 71,
    "left": 520.5,
    "top": 654.5
  },
  "comingSoon_x1041cfc5": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(51, 51, 51, 1)",
    "fontSize": 70,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Font Awesome 5 Brands",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 68,
    "height": 70,
    "left": 849,
    "top": 756
  },
  "comingSoon_x323edec9": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(40, 103, 178, 1)",
    "fontSize": 70,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Font Awesome 5 Brands",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 62,
    "height": 70,
    "left": 721,
    "top": 756
  }
});