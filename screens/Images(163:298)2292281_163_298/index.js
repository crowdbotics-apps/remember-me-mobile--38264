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
      <View style={styles.View_163_299}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1705ce6d-85b7-412c-a03c-7a5a82729414"
          }}
          style={styles.ImageBackground_I163_299_144_381}
        />
        <View style={styles.View_I163_299_144_386}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd992328-f88c-43b5-89f6-546ab9031b2f"
            }}
            style={styles.ImageBackground_I163_299_144_387}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/778baa57-b91d-4f9d-aa65-fad35136d1cb"
            }}
            style={styles.ImageBackground_I163_299_144_391}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2032d1ee-0fb0-45f1-8766-fb163fbe0273"
            }}
            style={styles.ImageBackground_I163_299_144_395}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21d15187-1674-4807-81aa-597cfddeedc1"
          }}
          style={styles.ImageBackground_I163_299_144_400}
        />
      </View>
      <View style={styles.View_163_300}>
        <View style={styles.View_I163_300_144_2324}>
          <Text style={styles.Text_I163_300_144_2324}>Next</Text>
        </View>
        <View style={styles.View_I163_300_144_2323}>
          <Text style={styles.Text_I163_300_144_2323}>Images</Text>
        </View>
        <View style={styles.View_I163_300_144_2329}>
          <Text style={styles.Text_I163_300_144_2329}>Back</Text>
        </View>
      </View>
      <View style={styles.View_163_470}>
        <View style={styles.View_163_458} />
        <View style={styles.View_163_467} />
        <View style={styles.View_163_459} />
        <View style={styles.View_163_468} />
        <View style={styles.View_163_461} />
        <View style={styles.View_163_469} />
        <View style={styles.View_163_462} />
        <View style={styles.View_163_464} />
      </View>
      <View style={styles.View_163_471}>
        <View style={styles.View_I163_471_150_580}>
          <View style={styles.View_I163_471_150_581} />
          <View style={styles.View_I163_471_150_582}>
            <View style={styles.View_I163_471_150_583} />
          </View>
        </View>
        <View style={styles.View_I163_471_150_584}>
          <View style={styles.View_I163_471_150_618} />
          <View style={styles.View_I163_471_150_619} />
          <View style={styles.View_I163_471_150_620} />
          <View style={styles.View_I163_471_150_621} />
          <View style={styles.View_I163_471_150_622} />
        </View>
        <View style={styles.View_I163_471_150_614} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_163_299: {
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
  ImageBackground_I163_299_144_381: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I163_299_144_386: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  ImageBackground_I163_299_144_387: {
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
  ImageBackground_I163_299_144_391: {
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
  ImageBackground_I163_299_144_395: {
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
  ImageBackground_I163_299_144_400: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  View_163_300: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_300_144_2324: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I163_300_144_2324: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I163_300_144_2323: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I163_300_144_2323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I163_300_144_2329: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I163_300_144_2329: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_163_470: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("115%"),
    minHeight: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("17%")
  },
  View_163_458: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)"
  },
  View_163_467: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("69%"),
    backgroundColor: "rgba(246, 246, 246, 1)"
  },
  View_163_459: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)"
  },
  View_163_468: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("69%"),
    backgroundColor: "rgba(246, 246, 246, 1)"
  },
  View_163_461: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(246, 246, 246, 1)"
  },
  View_163_469: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("88%"),
    backgroundColor: "rgba(246, 246, 246, 1)"
  },
  View_163_462: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49%"),
    backgroundColor: "rgba(246, 246, 246, 1)"
  },
  View_163_464: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("49%"),
    backgroundColor: "rgba(246, 246, 246, 1)"
  },
  View_163_471: {
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
  View_I163_471_150_580: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I163_471_150_581: {
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
  View_I163_471_150_582: {
    width: wp("36%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_I163_471_150_583: {
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
  View_I163_471_150_584: {
    flexGrow: 1,
    width: wp("85%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%")
  },
  View_I163_471_150_618: {
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
  View_I163_471_150_619: {
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
  View_I163_471_150_620: {
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
  View_I163_471_150_621: {
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
  View_I163_471_150_622: {
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
  View_I163_471_150_614: {
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
