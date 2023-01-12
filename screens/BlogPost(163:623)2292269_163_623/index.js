import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_163_624}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc0b4662-602a-43b9-8a07-c0857badab6b"
          }}
          style={styles.ImageBackground_I163_624_144_381}
        />
        <View style={styles.View_I163_624_144_386}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f37ce934-5e7c-4d4a-805f-0197529bc49c"
            }}
            style={styles.ImageBackground_I163_624_144_387}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f72da64-3966-4b09-a3df-036ea9a0fd41"
            }}
            style={styles.ImageBackground_I163_624_144_391}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0b4a32a-fbbc-4570-b0d1-0306e27bc729"
            }}
            style={styles.ImageBackground_I163_624_144_395}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0da70892-83bc-498c-afbe-bc517618cef2"
          }}
          style={styles.ImageBackground_I163_624_144_400}
        />
      </View>
      <View style={styles.View_163_627} />
      <View style={styles.View_163_677}>
        <View style={styles.View_163_674}>
          <Text style={styles.Text_163_674}>Post Title Here...</Text>
        </View>
        <View style={styles.View_163_678}>
          <Text style={styles.Text_163_678}>Author</Text>
        </View>
        <View style={styles.View_163_675}>
          <Text style={styles.Text_163_675}>
            Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt
            cillum elit ex ut. Dolore exercitation nulla tempor consequat
            aliquip occaecat. Nisi id ipsum irure aute. Deserunt sit aute irure
            quis nulla eu consequat fugiat Lorem sunt magna et consequat labore.
            Laboris incididunt id Lorem est duis deserunt nisi dolore eiusmod
            culpa exercitation consectetur. Fugiat do aliqua laboris cillum sint
            dolor officia adipisicing excepteur fugiat officia. Cupidatat ut
            elit consequat ea laborum occaecat laborum aute consectetur Lorem
            exercitation. Lorem anim minim officia aliquip commodo deserunt
            mollit. Duis deserunt quis cillum voluptate duis ipsum quis
            incididunt elit excepteur excepteur labore duis cillum. Voluptate
            sint nulla minim eiusmod in nulla. Ea id ad duis esse adipisicing
            culpa ex esse ea dolore consequat. Reprehenderit eu minim veniam
            aliquip do ipsum duis do qui adipisicing aliquip ad occaecat. Enim
            reprehenderit sunt do do. Ex fugiat nisi sit anim culpa nisi. Non
            labore fugiat culpa magna. Commodo esse Lorem ex duis do et do. Est
            laboris cupidatat ad est anim adipisicing sit labore do dolor
            officia. Fugiat consequat in excepteur reprehenderit id aliquip
            voluptate sint enim proident aliquip occaecat quis non. Ad nulla
            aliqua est amet aliqua sint est occaecat amet sunt. Ullamco laborum
            qui sint officia officia ad Lorem culpa minim voluptate occaecat id
            duis esse. Ullamco sunt magna consectetur excepteur. Id cupidatat
            proident ex ad elit laboris. Nulla aute sit occaecat laboris.
            Laboris minim aliquip exercitation elit commodo ipsum et fugiat sit
            anim laborum proident cillum laboris. Et cillum tempor esse sit anim
            et veniam. Tempor magna irure ex ea id fugiat. Ex eu sint tempor
            quis exercitation amet ut deserunt sit fugiat aliquip nostrud nulla.
            Eu sunt laborum elit consectetur tempor sunt dolore in sunt
            reprehenderit voluptate dolore adipisicing. Proident eiusmod
            reprehenderit quis sint exercitation voluptate non labore. Sunt non
            sint in Lorem occaecat dolore tempor ipsum et proident sit Lorem
            ipsum officia.
          </Text>
        </View>
      </View>
      <View style={styles.View_163_635}>
        <View style={styles.View_I163_635_150_580}>
          <View style={styles.View_I163_635_150_581} />
          <View style={styles.View_I163_635_150_582}>
            <View style={styles.View_I163_635_150_583} />
          </View>
        </View>
        <View style={styles.View_I163_635_150_584}>
          <View style={styles.View_I163_635_150_618} />
          <View style={styles.View_I163_635_150_619} />
          <View style={styles.View_I163_635_150_620} />
          <View style={styles.View_I163_635_150_621} />
          <View style={styles.View_I163_635_150_622} />
        </View>
        <View style={styles.View_I163_635_150_614} />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_163_624: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I163_624_144_381: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I163_624_144_386: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  ImageBackground_I163_624_144_387: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_I163_624_144_391: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_I163_624_144_395: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I163_624_144_400: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  View_163_627: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("10%"),
    backgroundColor: "rgba(246, 246, 246, 1)"
  },
  View_163_677: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("153%"),
    minHeight: hp("153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("42%")
  },
  View_163_674: {
    flexGrow: 1,
    width: wp("91%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_163_674: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_163_678: {
    flexGrow: 1,
    width: wp("91%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_163_678: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_163_675: {
    flexGrow: 1,
    width: wp("91%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_163_675: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_163_635: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("100%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_635_150_580: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I163_635_150_581: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_I163_635_150_582: {
    width: wp("36%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_I163_635_150_583: {
    width: wp("36%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_635_150_584: {
    flexGrow: 1,
    width: wp("85%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%")
  },
  View_I163_635_150_618: {
    width: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(93, 176, 117, 1)"
  },
  View_I163_635_150_619: {
    width: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    backgroundColor: "rgba(232, 232, 232, 1)"
  },
  View_I163_635_150_620: {
    width: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%"),
    backgroundColor: "rgba(232, 232, 232, 1)"
  },
  View_I163_635_150_621: {
    width: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("0%"),
    backgroundColor: "rgba(232, 232, 232, 1)"
  },
  View_I163_635_150_622: {
    width: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("0%"),
    backgroundColor: "rgba(232, 232, 232, 1)"
  },
  View_I163_635_150_614: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(189, 197, 205, 1)"
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
