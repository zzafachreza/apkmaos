// In App.js in a new project
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';
import { FaBeer } from 'react-icons/fa';
import CheckBox from '@react-native-community/checkbox';
import BouncyCheckbox from "react-native-bouncy-checkbox";

function KelompokTaksTigaTujuh({ navigation }) {



    const [skor1, jawabannomorSatu] = useState(0);
    const [skor2, jawabannomorDua] = useState(0);
    const [skor3, jawabannomorTiga] = useState(0);
    const [skor4, jawabannomorEmpat] = useState(0);
    const [skor5, jawabannomorLima] = useState(0);
    const [skor6, jawabannomorEnam] = useState(0);
    const [skor7, jawabannomorTujuh] = useState(0);
    const [skor8, jawabannomorDelapan] = useState(0);
    const [skor9, jawabannomorSembilan] = useState(0);
    const [skor10, jawabannomorSepuluh] = useState(0);
    const [skor11, jawabannomorSebelas] = useState(0);
    const [skor12, jawabannomorDuabelas] = useState(0);
    const [skor13, jawabannomorTigabelas] = useState(0);
    const [skor14, jawabannomorEmpatbelas] = useState(0);
    const [skor15, jawabannomorLimabelas] = useState(0);
    const [skor16, jawabannomorEnambelas] = useState(0);
    const [skor17, jawabannomorTujuhbelas] = useState(0);
    const [skor18, jawabannomorDelapanbelas] = useState(0);
    const [skor19, jawabannomorSembilanbelas] = useState(0);
    const [skor20, jawabannomorDuapuluh] = useState(0);


    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>



            <View style={{ backgroundColor: colors.secondary, padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, bottom: 30 }}>
                <View style={{ flexDirection: 'row', padding: 10, top: 25 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksDuaEnam')} >
                        <Image style={{ width: 24, height: 24 }} source={require('../../../assets/img/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 10, bottom: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Alata-Regular', color: colors.white, textAlign: 'center' }} >Final Task/{'\n'}
                        Activities</Text>
                </View>
            </View>

            <ScrollView>
                <View>
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 1-5 refer to the following text.</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Image style={{ width: 316, height: 565, }} source={require('../../../assets/img/unittiga/unittiga(4).png')} />
                </View>


                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>1. When did Snow Blue run away to the woods?</Text>
                    </View>

                    <View style={{ padding: 10 }}>




                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSatu(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. In the afternoon</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSatu(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. In the morning</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSatu(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. In the evening</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorSatu(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. In the full moon</Text>

                        </View>


                    </View>
                </View>




                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>2. Where did Snow Blue live with her uncle and aunt?</Text>
                    </View>

                    <View style={{ padding: 10 }}>



                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorDua(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. She lived in the cave</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorDua(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. She lived in the lion’s nest</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorDua(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. She lived everywhere in the woods</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorDua(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. She lived in the dwarfs’ cottage</Text>
                        </View>



                    </View>
                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>3. Why did Snow Blue live with her uncle and aunt?</Text>
                    </View>

                    <View style={{ padding: 10 }}>




                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorTiga(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. Because she loved them very much</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorTiga(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. As a result of forcing from them</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorTiga(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. Because her parents were dead</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorTiga(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. Because she was afraid of the dwarfs</Text>
                        </View>





                    </View>
                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>4. “She was very tired and …”
                            The underlined word has the apposite meaning with …</Text>
                    </View>

                    <View style={{ padding: 10 }}>





                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorEmpat(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. Fire up</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorEmpat(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. Sleepy</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorEmpat(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. Bored</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorEmpat(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. War</Text>
                        </View>


                    </View>
                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>5. The organization of the text above is …</Text>
                    </View>

                    <View style={{ padding: 10 }}>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorLima(10)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede' }} >


                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black }}>A. Orientation, Complication, Resolution</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorLima(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 10 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 10 }}>B. Orientation, Complication, Reorientation</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorLima(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 20 }} >
                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 20 }}>C. Orientation, Argument, Conclusion</Text>
                        </View>


                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                jawabannomorLima(0)
                            }} style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.secondary, backgroundColor: '#dedede', top: 30 }} >

                            </TouchableOpacity>
                            <Text style={{ left: 10, fontFamily: 'Alata-Regular', fontSize: 15, color: colors.black, top: 30 }}>D. Identification and description</Text>
                        </View>





                    </View>
                </View>


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




                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>6. What is the suitable title for the text above?</Text>
                    </View>

                    <View style={{ padding: 10 }}>

                    </View>

                </View>




                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>7. What kind of text is above?</Text>
                    </View>

                    <View style={{ padding: 10 }}>


                    </View>

                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>8. What is the purpose of the text above?</Text>
                    </View>

                    <View style={{ padding: 10 }}>

                    </View>

                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>10. What is the moral of the story above?</Text>
                    </View>

                    <View style={{ padding: 10 }}>

                    </View>
                </View>




                <View style={{}}>
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 11-15 refer to the following text.</Text>
                </View>

                <View style={{ alignItems: 'center', }}>
                    <Image style={{ width: 310, height: 211, }} source={require('../../../assets/img/unittiga/unittiga(6).png')} />
                </View>



                <View style={{ padding: 10 }}>
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'left' }}>       Once upon a time in Italy, lived an old carpenter named Geppeto. He was lonely, so he planned to craft a boy-shaped puppet and named it Pinocchio. “I wish you were a real boy,” he said longingly. One night, a blue fairy who heard Geppeto’s words granted his wishes. She sprinkled some magic powder on the puppet and brought Pinocchio to life. The fairy then told him, “Now, you’ve become a living puppet. But, if you want to be a real boy, you have to be good and make your father, Geppeto, proud of you.”
                        Geppeto was so happy found his puppet was now alive. He loved Pinocchio with all of his heart. He bought some books and sent Pinocchio to school so that he would grow to be a clever boy. But Pinocchio was disobedient. He used to skip school and play with his friends all day. When Geppeto found out his naughtiness, he was so angry. “Did you miss the school all the time?” he asked. Pinocchio didn’t tell the truth. “No father, I always study in school every day,” he lied. Instantly, his wooden nose began to grow long. “Are you telling me a lie?” Geppeto asked with a puzzled frown. “No father, I’m telling the truth,” he replied and his nose was getting longer. Every time Pinocchio told a lie, his nose was getting longer and longer. Geppeto had to ask his friend, the woodpecker, to peck Pinocchio’s nose to its initial size. Every time he did a bad thing or naughtiness, Pinocchio used to give his word that he would be a good boy next time.
                        In a little while, Pinocchio forgot all his promises. “School isn’t fun at all and it’s so boring. I don’t want to study anymore. I want to have some great adventures,” he thought. So, Pinocchio decided to leave home and joined a circus. However, Pinocchio soon realized that lived at circus wasn’t fun at all. The poor Pinocchio must work all day and since he had stopped going to school, his ears now had become two large donkey ears. Pinocchio regretted leaving home and missed his father terribly. Then one day, he heard terrible news that Geppeto had been looking for him and now he had been swallowed up by a giant whale. Instantaneously, Pinocchio run away from the circus and set off to rescue his father. Eventually, Pinocchio could find the giant whale. However, as soon as the whale saw him, it swallowed him up as well. Inside of its belly, Pinocchio saw his father. “Father, it’s me Pinocchio,” he shouted. They were so happy to see each other. “I’ve got an idea to get out of here,” said Pinocchio. Then he began tickling the giant whale’s stomach. As soon as it opened its mouth and was going to give a big sneeze, Pinocchio and Geppeto made their way to get out of the whale.
                        At the end, Pinocchio and Geppeto got home safely. The blue fairy was so happy with Pinocchio’s courage. As a gift, she magically turned Pinocchio into a real flesh and blood boy. Since that day, Pinocchio always kept his promises and never missed school again. And they both lived happily ever after.




                    </Text>
                </View>


                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>11. Who was Pinocchio?</Text>
                    </View>

                    <View style={{ padding: 10 }}>


                    </View>

                </View>




                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>12. Who was Geppeto?</Text>
                    </View>

                    <View style={{ padding: 10 }}>


                    </View>

                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>13. What was Pinocchio made off?</Text>
                    </View>

                    <View style={{ padding: 10 }}>

                    </View>

                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>14. What happened when Pinocchio told a lie?</Text>
                    </View>

                    <View style={{ padding: 10 }}>



                    </View>

                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>15. Instead of going to school, where did Pinocchio go?</Text>
                    </View>

                    <View style={{ padding: 10 }}>

                    </View>
                </View>




                <View style={{}}>
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Questions 16-20 refer to the following text.</Text>
                </View>

                <View style={{ alignItems: 'center', }}>
                    <Image style={{ width: 327, height: 270, }} source={require('../../../assets/img/unittiga/unittiga(7).png')} />
                </View>


                <View style={{ padding: 10 }}>
                    <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'left' }}> Once upon a time there was a boy called Jack. He lived with his mother. They were very poor. All they had was a cow. One morning, Jack’s mother told Jack to take their cow to market and sell her. On the way, Jack met a man. He gave Jack some magic beans for the cow. Jack took the beans and went back home. When Jack’s mother saw the beans she was very angry. She threw the beans out of the window. The next morning, Jack looked out of the window. There was a giant beanstalk. He went outside and started to climb the beanstalk. He climbed up to the sky through the clouds. Jack saw a beautiful castle. He went inside. Jack heard a voice. ‘Fee, fi, fo, fum!’ Jack ran into a cupboard. An enormous giant came into the room and sat down. On the table there was a hen and a golden harp. ‘Lay!’ said the giant. The hen laid an egg. It was made of gold. ‘Sing!’ said the giant. The harp began to sing. Soon the giant was asleep. Jack jumped out of the cupboard. He took the hen and the harp. Suddenly, the harp sang, ‘Help, master!’ The giant woke up and shouted, ‘Fee, fi, fo, fum!’ Jack ran and started climbing down the beanstalk. The giant came down after him. Jack shouted, ‘Mother! Help!’ Jack’s mother took an axe and chopped down the beanstalk. The giant fell and crashed to the ground. Nobody ever saw him again. With the golden eggs and the magic harp, Jack and his mother lived happily ever after.





                    </Text>
                </View>


                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>16. Where did Jack sell his cow?</Text>
                    </View>

                    <View style={{ padding: 10 }}>


                    </View>

                </View>




                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>17. What is the text above?</Text>
                    </View>

                    <View style={{ padding: 10 }}>


                    </View>

                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>18. On the way to market, who did Jack meet?</Text>
                    </View>

                    <View style={{ padding: 10 }}>

                    </View>

                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>19. Why was Jack’s mother so angry?</Text>
                    </View>

                    <View style={{ padding: 10 }}>

                    </View>

                </View>



                <View style={{ padding: 20 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: 'Alata-Regular', fontSize: 15 }}>20. “They were very poor.” The antonym of the underlined word is ………….</Text>
                    </View>

                    <View style={{ padding: 10 }}>

                    </View>
                </View>


                <View style={{ padding: 10, top: 20, margin: 20 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('KelompokTaksSatuDelapan')} style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10, }} >
                        <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', fontSize: 15, textAlign: 'center' }}>Next</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>


            <View style={{ padding: 1, backgroundColor: colors.secondary, }}></View>
            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={() => navigation.navigate('HalamanHome')} style={{}}  >
                    <Image style={{ width: 38, height: 33, }} source={require('../../../assets/img/home.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('HalamanHistory')} style={{}}  >
                    <Image style={{ width: 28, height: 33, }} source={require('../../../assets/img/history.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('HalamanAkun')} style={{}}  >
                    <Image style={{ width: 33, height: 33, }} source={require('../../../assets/img/profle.png')} />
                </TouchableOpacity>
            </View>



        </View>
    );
}


export default KelompokTaksTigaTujuh;