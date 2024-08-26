// In App.js in a new project
import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, TextInput, SafeAreaView, Alert, } from 'react-native';
import colors from '../../../utils/colors/colors';
import { apiURL, getData, MYAPP } from "../../../utils/localStorage";

export default function KelompokTaksTigaTujuh({ navigation }) {


  const sendServer = () => {

    getData('user').then(u => {

      const kirim = {
        fid_user: u.id,
        unit: 3,
        skor: parseInt(pilih[1].skor) + parseInt(pilih[2].skor)
          + parseInt(pilih[3].skor) + parseInt(pilih[4].skor) + parseInt(pilih[5].skor) + parseInt(pilih[6].skor) + parseInt(pilih[7].skor) + parseInt(pilih[8].skor) + parseInt(pilih[9].skor) + parseInt(pilih[10].skor) + parseInt(pilih[11].skor) + parseInt(pilih[12].skor) + parseInt(pilih[13].skor) + parseInt(pilih[14].skor) + parseInt(pilih[15].skor) + parseInt(pilih[16].skor) + parseInt(pilih[17].skor) + parseInt(pilih[18].skor) + parseInt(pilih[19].skor) + parseInt(pilih[20].skor)
      }

      // console.log(kirim);
      axios.post(apiURL + 'insert_nilai', kirim).then(res => {
        console.log(res.data);
        Alert.alert(MYAPP, res.data.message);
        navigation.navigate('KelompokTaksTigaDelapan')
      })

    }
    );

  }



  const [pilih, setPilih] = useState({
    1: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    2: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    3: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    4: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    5: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    6: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    7: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    8: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    9: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    10: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    11: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    12: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    13: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    14: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    15: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    16: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    17: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    18: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    19: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
    20: {
      a: false,
      b: false,
      c: false,
      d: false,
      skor: 0,
    },
  });


  const MYsoal = ({ no, soal, a, b, c, d, benar, onPress }) => {
    return (
      <View style={{
        margin: 10,
      }}>
        <Text style={{
          fontFamily: 'Alata-Regular',
          fontSize: 20,
        }}>{soal}</Text>

        <TouchableOpacity onPress={() => {
          setPilih({
            ...pilih,
            [no]: {
              a: true,
              b: false,
              c: false,
              d: false,
              skor: benar == "a" ? 5 : 0
            }
          })
        }} style={{
          flexDirection: 'row',
          marginVertical: 5,
          marginLeft: 10,
          alignItems: 'center'
        }}>
          <View style={{
            width: 20,
            borderRadius: 4,
            height: 20,
            backgroundColor: pilih[no].a ? colors.black : colors.border,
            borderWidth: 1,
            borderColor: colors.border
          }}></View>
          <Text style={{
            flex: 1,
            left: 10,
            fontFamily: 'Alata-Regular',
            fontSize: 15,
          }}>{a}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setPilih({
            ...pilih,
            [no]: {
              a: false,
              b: true,
              c: false,
              d: false,
              skor: benar == "b" ? 5 : 0
            }
          })
        }} style={{
          flexDirection: 'row',
          marginVertical: 5,
          marginLeft: 10,
          alignItems: 'center'
        }}>
          <View style={{
            width: 20,
            borderRadius: 4,
            height: 20,
            backgroundColor: pilih[no].b ? colors.black : colors.border,
            borderWidth: 1,
            borderColor: colors.border
          }}></View>
          <Text style={{
            flex: 1,
            left: 10,
            fontFamily: 'Alata-Regular',
            fontSize: 15,
          }}>{b}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setPilih({
            ...pilih,
            [no]: {
              a: false,
              b: false,
              c: true,
              d: false,
              skor: benar == "c" ? 5 : 0
            }
          })
        }} style={{
          flexDirection: 'row',
          marginVertical: 5,
          marginLeft: 10,
          alignItems: 'center'
        }}>
          <View style={{
            width: 20,
            borderRadius: 4,
            height: 20,
            backgroundColor: pilih[no].c ? colors.black : colors.border,
            borderWidth: 1,
            borderColor: colors.border
          }}></View>
          <Text style={{
            flex: 1,
            left: 10,
            fontFamily: 'Alata-Regular',
            fontSize: 15,
          }}>{c}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setPilih({
            ...pilih,
            [no]: {
              a: false,
              b: false,
              c: false,
              d: true,
              skor: benar == "d" ? 5 : 0
            }
          })
        }} style={{
          flexDirection: 'row',
          marginVertical: 5,
          marginLeft: 10,
          alignItems: 'center'
        }}>
          <View style={{
            width: 20,
            borderRadius: 4,
            height: 20,
            backgroundColor: pilih[no].d ? colors.black : colors.border,
            borderWidth: 1,
            borderColor: colors.border
          }}></View>
          <Text style={{
            flex: 1,
            left: 10,
            fontFamily: 'Alata-Regular',
            fontSize: 15,
          }}>{d}</Text>
        </TouchableOpacity>
      </View>
    )
  }


  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.white
    }}>
      <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, }}>
        <View style={{ flexDirection: 'row', padding: 10, top: 0 }} >
          <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksSatuEnam')} style={{
            justifyContent: 'center'
          }} >
            <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/back.png')} />
          </TouchableOpacity>
          <Text style={{ flex: 1, fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Final Task/{'\n'}
            Activities</Text>
        </View>
      </View>





      <ScrollView showsVerticalScrollIndicator={false}>
        {/* soal */}


        <View>
          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 1-5 refer to the following text.</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Image style={{ width: 316, height: 565, }} source={require('../../../assets/img/unittiga/unittiga(4).png')} />
        </View>


        <MYsoal no={1} soal='1. When did Snow Blue run away to the woods?' a='A. In the afternoon' b='B. In the morning' c='C. In the evening' d='D. In the full moon' benar='b' />
        <MYsoal no={2} soal='2. Where did Snow Blue live with her uncle and aunt?' a='A. She lived in the cave' b='B. She lived in the lion’s nest' c='C. She lived everywhere in the woods' d='D. She lived in the dwarfs’ cottage' benar='c' />
        <MYsoal no={3} soal='3. Why did Snow Blue live with her uncle and aunt?' a='A. Because she loved them very much' b='B. As a result of forcing from them' c='C. Because her parents were dead' d='D. Because she was afraid of the dwarfs' benar='c' />
        <MYsoal no={4} soal='4. “She was very tired and …” The underlined word has the apposite meaning with …' a='A. Fire up' b='B. Sleepy' c='C. Bored' d='D. War' benar='a' />
        <MYsoal no={5} soal='5. The organization of the text above is …' a='A. Orientation, Complication, Resolution*' b='B. Orientation, Complication, Reorientation' c='C. Orientation, Argument, Conclusion' d='D. Identification and description' benar='a' />

        <View style={{}}>
          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 5-10 refer to the following text.</Text>
        </View>

        <View style={{ alignItems: 'center', }}>
          <Image style={{ width: 204, height: 204, }} source={require('../../../assets/img/unittiga/unittiga(5).png')} />
        </View>




        <View style={{ padding: 10 }}>
          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'left' }}>       Many years ago, there lived an emperor who cared too much about his looks. He liked to wear the fanciest suits and parade around his kingdom. He had a new coat for every hour of the day and often liked to show off his outfits. He did not care much for the kingdom, and the people were not happy with their emperor. One day, two crooks came to the city and lied that they were weavers. They told the people that they could manufacture the finest cloth they could ever imagine.
            They said the cloth was magical and that the cloth could only be seen only the clever and those fit for their places. The dress was so special that no ordinary man could see it. The people of the city were amazed and astonished by the words of the weavers. Soon, the emperor heard of the weavers and invited them to his castle. “If I were to be dressed in this special suit, I will know which men in my empire are unfit for their places, and I would be able to know the clever and the stupid. I must have this cloth woven for me without delay“ , said the emperor. The crooks asked for gold and the finest silk and the most precious gold-cloth. The emperor gave them all they asked and told them to begin weaving the dress immediately. The emperor wanted to wear the new suit at the annual grand parade where everyone in the city would gather around to watch the emperor pass by. The crooks pretended to be hard at work and bought several candles to burn all night so that everyone will think they were working hard on the emperor’s new suit. The people fell for their trick and praised the weavers. The crooks did nothing all day but laugh at the foolishness of the emperor.
            Soon, the emperor wanted to see his new suit but the weavers told him that it was not ready to be seen yet. The emperor grew impatient and decided to send his old minister to spy on the weavers. The old minister was surprised to see that the weavers were not weaving any dress at all! The weavers pointed at empty looms and told him the colors and patterns on the dress but he could not see anything. The old minister was worried that he was unfit for his position and he did not want the emperor to know of this. He returned to the emperor and told him that his new suit was very beautiful and colorful. The emperor was pleased and appointed the crooks new imperial court weavers. The crooks laughed at the emperor’s foolishness for he did not know he was being tricked. The day of the parade came and the weavers brought an invisible suit to the emperor. The emperor was worried because he could not see anything at all. The weavers wore him an invisible coat and trousers. The emperor did not want them to know that he was unfit for his position. He was worried about what the people would say. He pretended to wear this invisible suit and told the weavers that the new suit was very beautiful and colorful but in fact, there was no coat or trouser. The emperor’s chamberlains, who were to carry the train, stretched their hands to the ground and pretended to lift up a train, and hold something in their hands. They did not want the people to know that they could not see anything.
            The emperor marched in the procession under the beautiful canopy, and everyone started to laugh at him. “The emperor has nothing on at all,” cried the people. The emperor was sorry that he had been tricked and the people were right but there was nothing he could do. He continued to march and the chamberlains continued to walk, carrying a train that did not exist.

          </Text>
        </View>
        <TouchableOpacity style={{ justifyContent: 'center', alignContent: 'center', marginHorizontal: 10, marginVertical: 10 }}>
          <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
            Adopted from: https://www.fairylando.com/the-emperors-new-suit/
          </Text>
        </TouchableOpacity>
        <MYsoal no={6} soal='6. What is the suitable title for the text above?' a='A. The Emperor’s New Suit' b='B. The Emperor’s New Horse' c='C. The Emperor’s Book' d='D. The Emperor’ Shoes' benar='a' />
        <MYsoal no={7} soal='7. What kind of text is above?' a='A. She lived in the cave' b='B. She lived in the lion’s nest' c='C. She lived everywhere in the woods' d='D. She lived in the dwarfs’ cottage' benar='c' />
        <MYsoal no={8} soal='8. What is the purpose of the text above?' a='A. To describe the emperor' b='B. To tell the series of events' c='C. To give a report about the emperor’s habit' d='D. To entertain or amuse the reader' benar='d' />
        <MYsoal no={9} soal='9. The following statements are true, except …' a='A. The emperor had a new coat for every hour of the day and often liked to show off his outfits.' b='B. The crooks asked for silver from the emperor.' c='C. The crooks did nothing all day but laugh at the foolishness of the emperor.' d='D. The old minister was surprised to see that the weavers were not weaving any dresses at all.' benar='b' />
        <MYsoal no={10} soal='10. What is the moral of the story above?' a='A. It is best to trust oneself and be honest.' b='B. Respect other’s property and privacy.' c='C. It is always good to have a second language.' d='D. We should be kind to other people.' benar='a' />

        <View style={{}}>
          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 11-15 refer to the following text.</Text>
        </View>

        <View style={{ alignItems: 'center', }}>
          <Image style={{ width: 310, height: 211, }} source={require('../../../assets/img/unittiga/unittiga(6).png')} />
        </View>


        <TouchableOpacity style={{ justifyContent: 'center', alignContent: 'center', marginHorizontal: 10, marginVertical: 10 }}>
          <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
            Source: https://www.looper.com/670924/the-untold-truth-of-pinocchio/
          </Text>
        </TouchableOpacity>
        <View style={{ padding: 10 }}>
          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'left' }}>       Once upon a time in Italy, lived an old carpenter named Geppeto. He was lonely, so he planned to craft a boy-shaped puppet and named it Pinocchio. “I wish you were a real boy,” he said longingly. One night, a blue fairy who heard Geppeto’s words granted his wishes. She sprinkled some magic powder on the puppet and brought Pinocchio to life. The fairy then told him, “Now, you’ve become a living puppet. But, if you want to be a real boy, you have to be good and make your father, Geppeto, proud of you.”
            Geppeto was so happy found his puppet was now alive. He loved Pinocchio with all of his heart. He bought some books and sent Pinocchio to school so that he would grow to be a clever boy. But Pinocchio was disobedient. He used to skip school and play with his friends all day. When Geppeto found out his naughtiness, he was so angry. “Did you miss the school all the time?” he asked. Pinocchio didn’t tell the truth. “No father, I always study in school every day,” he lied. Instantly, his wooden nose began to grow long. “Are you telling me a lie?” Geppeto asked with a puzzled frown. “No father, I’m telling the truth,” he replied and his nose was getting longer. Every time Pinocchio told a lie, his nose was getting longer and longer. Geppeto had to ask his friend, the woodpecker, to peck Pinocchio’s nose to its initial size. Every time he did a bad thing or naughtiness, Pinocchio used to give his word that he would be a good boy next time.
            In a little while, Pinocchio forgot all his promises. “School isn’t fun at all and it’s so boring. I don’t want to study anymore. I want to have some great adventures,” he thought. So, Pinocchio decided to leave home and joined a circus. However, Pinocchio soon realized that lived at circus wasn’t fun at all. The poor Pinocchio must work all day and since he had stopped going to school, his ears now had become two large donkey ears. Pinocchio regretted leaving home and missed his father terribly. Then one day, he heard terrible news that Geppeto had been looking for him and now he had been swallowed up by a giant whale. Instantaneously, Pinocchio run away from the circus and set off to rescue his father. Eventually, Pinocchio could find the giant whale. However, as soon as the whale saw him, it swallowed him up as well. Inside of its belly, Pinocchio saw his father. “Father, it’s me Pinocchio,” he shouted. They were so happy to see each other. “I’ve got an idea to get out of here,” said Pinocchio. Then he began tickling the giant whale’s stomach. As soon as it opened its mouth and was going to give a big sneeze, Pinocchio and Geppeto made their way to get out of the whale.
            At the end, Pinocchio and Geppeto got home safely. The blue fairy was so happy with Pinocchio’s courage. As a gift, she magically turned Pinocchio into a real flesh and blood boy. Since that day, Pinocchio always kept his promises and never missed school again. And they both lived happily ever after.




          </Text>
        </View>

        <MYsoal no={11} soal='11. Who was Pinocchio?' a='A. Pinocchio is a daughter' b='B. Pinocchio is a puppet' c='C. Pinocchio is a carpenter' d='D. Pinocchio is a farmer' benar='b' />
        <MYsoal no={12} soal='12. Who was Geppeto?' a='A. Geppetto is a farmer' b='B. Geppetto is a driver' c='C. Geppetto is a carpenter' d='D. Geppetto is a chef' benar='c' />
        <MYsoal no={13} soal='13. What was Pinocchio made off?' a='A. Plastic' b='B. Silver' c='C. Gold' d='D. Wood' benar='d' />
        <MYsoal no={14} soal='14. What happened when Pinocchio told a lie?' a='A. His nose grew long' b='B. His hair grew long' c='C. His father was angry' d='D. Her mother was angry' benar='a' />
        <MYsoal no={15} soal='15. Instead of going to school, where did Pinocchio go?' a='A. Market' b='B. Circus' c='C. Home' d='D. Garden' benar='b' />

        <View style={{}}>
          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 16-20 refer to the following text.</Text>
        </View>

        <View style={{ alignItems: 'center', }}>
          <Image style={{ width: 327, height: 270, }} source={require('../../../assets/img/unittiga/unittiga(7).png')} />
        </View>

        <TouchableOpacity style={{ justifyContent: 'center', alignContent: 'center', marginHorizontal: 10, marginVertical: 10 }}>
          <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
            Source: https://www.smartgamesandpuzzles.com/jack-and-the-beanstalk.html
          </Text>
        </TouchableOpacity>
        <View style={{ padding: 10 }}>
          <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'left' }}> Once upon a time there was a boy called Jack. He lived with his mother. They were very poor. All they had was a cow. One morning, Jack’s mother told Jack to take their cow to market and sell her. On the way, Jack met a man. He gave Jack some magic beans for the cow. Jack took the beans and went back home. When Jack’s mother saw the beans she was very angry. She threw the beans out of the window. The next morning, Jack looked out of the window. There was a giant beanstalk. He went outside and started to climb the beanstalk. He climbed up to the sky through the clouds. Jack saw a beautiful castle. He went inside. Jack heard a voice. ‘Fee, fi, fo, fum!’ Jack ran into a cupboard. An enormous giant came into the room and sat down. On the table there was a hen and a golden harp. ‘Lay!’ said the giant. The hen laid an egg. It was made of gold. ‘Sing!’ said the giant. The harp began to sing. Soon the giant was asleep. Jack jumped out of the cupboard. He took the hen and the harp. Suddenly, the harp sang, ‘Help, master!’ The giant woke up and shouted, ‘Fee, fi, fo, fum!’ Jack ran and started climbing down the beanstalk. The giant came down after him. Jack shouted, ‘Mother! Help!’ Jack’s mother took an axe and chopped down the beanstalk. The giant fell and crashed to the ground. Nobody ever saw him again. With the golden eggs and the magic harp, Jack and his mother lived happily ever after.





          </Text>
        </View>

        <TouchableOpacity style={{ justifyContent: 'center', alignContent: 'center', marginHorizontal: 10, marginVertical: 10 }}>
          <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#CDCDCD' }}>
            Adopted from: https://learnenglishkids.britishcouncil.org/sites/kids/files/attachment/short-stories-jack-and-the-beanstalk-transcript.pdf
          </Text>
        </TouchableOpacity>
        <MYsoal no={16} soal='16. Where did Jack sell his cow?' a='A. At giant’s castle' b='B. At beautiful castle' c='C. On the way to the market' d='D. At the man’s house' benar='c' />
        <MYsoal no={17} soal='17. What is the text above?' a='A. Jack and the Beanstalk' b='B. Jack and his son' c='C. The giantess and his mother' d='D. Jack and the man' benar='a' />
        <MYsoal no={18} soal='18. On the way to market, who did Jack meet?' a='A. An enormous giant' b='B. A man' c='C. His mother' d='D. His father' benar='b' />
        <MYsoal no={19} soal='19. Why was Jack’s mother so angry?' a='A. Because Jack sold their cow for the magic beans.' b='B. Because the cow was precious.' c='C. Because the cow was expensive.' d='D. Because Jack went to market.' benar='a' />
        <MYsoal no={20} soal='20. “They were very poor.” The antonym of the underlined word is ………….' a='A. Kind' b='B. Happy' c='C. Angry' d='D. Rich' benar='d' />




        <View style={{ padding: 10, top: 20, margin: 20 }} >
          <TouchableOpacity onPress={sendServer} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
            <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Next</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

    </SafeAreaView >
  )
}

const styles = StyleSheet.create({})