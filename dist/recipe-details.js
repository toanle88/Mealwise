(() => {
  const rec=(ingredients,vi,en)=>({ingredients:ingredients.map(x=>x.split('|')),steps:{vi,en}});
  window.COM_NHA_RECIPE_DETAILS={
    'pork-egg':rec(['thịt ba chỉ|pork belly|g|650','trứng gà|eggs|quả|4','nước dừa tươi|fresh coconut water|ml|400','hành tím|shallot|g|25','tỏi|garlic|g|10','nước mắm|fish sauce|ml|25','đường|sugar|g|18','tiêu đen|black pepper|g|2','nước lọc|water|ml|5'],[
      'Thịt cắt miếng 4 cm. Thấm khô; trứng luộc 9 phút, ngâm nước nguội rồi bóc vỏ. Băm hành tím và tỏi.',
      'Ướp thịt với 15 ml nước mắm, 1/2 lượng hành tỏi và tiêu 15 phút trong tủ lạnh.',
      'Thắng đường với 1 thìa cà phê nước đến màu cánh gián. Cho thịt vào đảo săn 4–5 phút, thêm phần hành tỏi còn lại.',
      'Đổ nước dừa và phần nước mắm còn lại vào. Sôi lên thì hạ lửa, đậy hờ và kho 35 phút.',
      'Cho trứng vào kho thêm 15 phút. Nêm lại; thêm chút nước nóng nếu cạn, dọn khi thịt mềm và nước kho sánh.'
    ],[
      'Cut the pork into 4 cm pieces and pat dry. Boil the eggs for 9 minutes, cool in water, and peel. Mince the shallot and garlic.',
      'Marinate the pork with 15 ml fish sauce, half the shallot and garlic, and the pepper for 15 minutes in the refrigerator.',
      'Melt the sugar with 1 teaspoon water until amber. Add pork and brown for 4–5 minutes, then add the remaining aromatics.',
      'Pour in the coconut water and remaining fish sauce. Bring to a boil, then partly cover and simmer for 35 minutes.',
      'Add the eggs and simmer 15 minutes more. Adjust seasoning; add hot water if needed. Serve when tender with a glossy sauce.'
    ]),
    'crispy-pork':rec(['thịt ba chỉ|pork belly|g|500','hành tím|shallot|g|25','tỏi|garlic|g|10','nước mắm|fish sauce|ml|20','đường|sugar|g|8','tiêu đen|black pepper|g|2','dầu ăn|cooking oil|ml|10'],[
      'Cắt ba chỉ thành lát dày 5 mm. Thấm khô để khi rang thịt lên màu đẹp; thái mỏng hành tím, băm tỏi.',
      'Ướp thịt với nước mắm, đường, tiêu và một nửa hành tím trong 10 phút trong tủ lạnh.',
      'Đặt thịt vào chảo nguội, bật lửa vừa để mỡ chảy từ từ. Rang 10–12 phút, đảo đều đến khi cạnh vàng.',
      'Gạn bớt mỡ nếu nhiều. Cho tỏi và hành tím còn lại vào, đảo 30 giây đến thơm.',
      'Nếm lại, tắt bếp khi thịt vàng cạnh nhưng chưa khô. Dọn nóng cùng cơm.'
    ],[
      'Slice the pork belly 5 mm thick and pat dry so it browns well. Thinly slice the shallot and mince the garlic.',
      'Marinate with fish sauce, sugar, pepper, and half the shallot for 10 minutes in the refrigerator.',
      'Put the pork in a cold pan and turn the heat to medium so the fat renders slowly. Cook 10–12 minutes, turning until the edges brown.',
      'Pour off excess fat if needed. Add garlic and the remaining shallot; stir for 30 seconds until fragrant.',
      'Taste and turn off the heat while the pork is browned but still juicy. Serve hot with rice.'
    ]),
    'pork-boiled':rec(['thịt nạc vai|pork shoulder|g|500','gừng|ginger|g|20','dưa leo|cucumber|g|200','xà lách|lettuce|g|100','nước mắm|fish sauce|ml|30','chanh|lime|quả|1','đường|sugar|g|8','muối|salt|g|5','nước lọc|water|ml|15'],[
      'Dùng khăn giấy lau sạch bề mặt thịt; buộc gọn nếu miếng không đều. Gừng đập dập. Rửa xà lách và dưa leo dưới vòi nước, để ráo.',
      'Đun nồi nước đủ ngập thịt cùng gừng và muối. Khi nước sôi, cho thịt vào; sôi lại thì hớt bọt và hạ lửa.',
      'Luộc liu riu 25–35 phút tùy độ dày. Dùng nhiệt kế kiểm tra tâm phần dày nhất đạt 63°C; để nghỉ ít nhất 3 phút trước khi thái. Tắt bếp, ngâm thịt trong nước luộc 5 phút.',
      'Pha nước chấm: khuấy nước mắm, đường, nước cốt chanh và 1 thìa canh nước ấm trong lượng đã chuẩn bị; nếm chua mặn ngọt cân bằng.',
      'Vớt thịt, để nguội 5 phút rồi thái lát mỏng ngang thớ. Dọn với dưa leo, xà lách và nước chấm.'
    ],[
      'Pat the pork dry and tie it if the piece is uneven. Crush the ginger. Rinse the lettuce and cucumber under running water and drain.',
      'Bring enough water to cover the pork to a boil with ginger and salt. Add the pork; skim when it returns to a boil, then lower the heat.',
      'Simmer 25–35 minutes depending on thickness. Check the center of the thickest part with a thermometer: 63°C, then rest at least 3 minutes before slicing. Resting in the hot broth is fine.',
      'For the dip, stir fish sauce, sugar, lime juice, and 1 tablespoon of the listed warm water until balanced.',
      'Lift out the pork, rest 5 minutes, and slice thinly across the grain. Serve with cucumber, lettuce, and dipping sauce.'
    ]),
    'sweet-sour-ribs':rec(['sườn heo|pork ribs|g|500','cà chua|tomato|g|180','hành tây|onion|g|100','tỏi|garlic|g|12','giấm gạo|rice vinegar|ml|20','nước mắm|fish sauce|ml|20','đường|sugar|g|18','dầu ăn|cooking oil|ml|15','nước lọc|water|ml|130','tiêu đen|black pepper|g|1'],[
      'Chặt sườn miếng 4 cm. Trụng sườn trong nước sôi 2 phút, đổ bỏ nước, rửa sạch nồi và thấm sườn khô. Cắt cà chua và hành tây múi cau.',
      'Ướp sườn với 10 ml nước mắm, tiêu và một nửa tỏi băm trong 15 phút trong tủ lạnh.',
      'Chiên áp chảo sườn với dầu 6–8 phút cho vàng các mặt. Thêm 100 ml nước trong lượng đã chuẩn bị, đậy nắp và om 25–30 phút đến khi sườn mềm; châm thêm nước nóng nếu cạn.',
      'Khuấy giấm, đường, phần nước mắm còn lại và 2 thìa canh nước trong lượng đã chuẩn bị. Phi thơm tỏi còn lại, xào cà chua đến mềm rồi cho hành tây vào.',
      'Đổ sốt vào chảo sườn, đảo và rim 3–5 phút đến khi sốt áo quanh sườn. Nếm lại trước khi dọn.'
    ],[
      'Cut the ribs into 4 cm pieces. Blanch in boiling water for 2 minutes, discard the water, clean the pot, and pat the ribs dry. Wedge the tomato and onion.',
      'Marinate the ribs with 10 ml fish sauce, a little pepper, and half the minced garlic for 15 minutes in the refrigerator.',
      'Pan-sear in oil for 6–8 minutes until browned. Add 100 ml of the listed water, cover, and braise 25–30 minutes until tender; add hot water if the pan dries out.',
      'Mix vinegar, sugar, remaining fish sauce, and 2 tablespoons of the listed water. Sauté the remaining garlic, soften the tomato, then add onion.',
      'Pour the sauce into the rib pan and toss 3–5 minutes until glossy and clinging. Taste before serving.'
    ]),
    'minced-pork-tomato':rec(['thịt heo xay|ground pork|g|350','cà chua|tomato|g|350','hành tím|shallot|g|25','tỏi|garlic|g|10','hành lá|spring onion|g|15','nước mắm|fish sauce|ml|18','đường|sugar|g|6','dầu ăn|cooking oil|ml|12','tiêu đen|black pepper|g|1.5'],[
      'Rửa cà chua, bỏ cuống rồi thái hạt lựu. Băm hành tím, tỏi; cắt hành lá riêng phần trắng và xanh.',
      'Ướp thịt xay với 10 ml nước mắm, tiêu và phần trắng hành lá trong 10 phút; để trong tủ lạnh nếu chưa nấu ngay.',
      'Phi thơm hành tím và tỏi. Cho thịt vào, dằm tơi và đảo đến khi đổi màu, khoảng 4 phút.',
      'Thêm cà chua và đường, đậy nắp 5 phút cho cà chua ra nước. Mở nắp, đảo đến khi thành sốt sệt.',
      'Nêm phần nước mắm còn lại; rắc hành lá xanh. Thịt phải chín hoàn toàn, sốt đỏ mềm và không còn vị sống của cà chua.'
    ],[
      'Rinse the tomatoes, remove the stems, and dice. Mince shallot and garlic; separate the white and green parts of the scallions.',
      'Season the ground pork with 10 ml fish sauce, pepper, and the white scallion parts for 10 minutes in the refrigerator.',
      'Sauté shallot and garlic until fragrant. Add pork, break it up, and cook through to 71°C, about 4–6 minutes depending on the pan.',
      'Add tomato and sugar. Cover for 5 minutes to release juices, then uncover and stir until saucy.',
      'Season with the remaining fish sauce and add scallion greens. Cook the pork through; the tomato sauce should be soft and thick.'
    ]),
    'pork-pepper':rec(['thịt ba chỉ|pork belly|g|500','hành tím|shallot|g|25','tỏi|garlic|g|10','nước mắm|fish sauce|ml|25','nước dừa tươi|fresh coconut water|ml|180','đường|sugar|g|10','tiêu đen|black pepper|g|4','nước lọc|water|ml|5'],[
      'Cắt thịt miếng 3 cm, thấm khô. Băm hành tím và tỏi; giã dập một nửa tiêu.',
      'Ướp thịt với nước mắm, đường, tiêu giã và hành tím 15 phút trong tủ lạnh.',
      'Thắng đường trong nồi với 1 thìa cà phê nước đến màu hổ phách. Cho thịt vào đảo săn 4 phút.',
      'Thêm nước dừa và tỏi, đun sôi rồi hạ lửa nhỏ. Kho hé nắp 25–30 phút, thỉnh thoảng đảo.',
      'Khi nước kho còn khoảng 1/3 và thịt mềm, nêm lại, rắc phần tiêu còn lại rồi dọn.'
    ],[
      'Cut pork into 3 cm pieces and pat dry. Mince shallot and garlic; crush half the pepper.',
      'Marinate with fish sauce, sugar, crushed pepper, and shallot for 15 minutes in the refrigerator.',
      'Caramelize sugar in a pot with 1 teaspoon water until amber. Add pork and brown for 4 minutes.',
      'Add coconut water and garlic. Bring to a boil, then simmer partly covered for 25–30 minutes, turning occasionally.',
      'When the sauce has reduced by about two-thirds and the pork is tender, adjust seasoning, add remaining pepper, and serve.'
    ]),
    'pork-green-beans':rec(['thịt heo|pork|g|300','đậu que|green beans|g|250','tỏi|garlic|g|15','hành tím|shallot|g|15','nước mắm|fish sauce|ml|18','dầu ăn|cooking oil|ml|12','đường|sugar|g|4','tiêu đen|black pepper|g|1.5','nước lọc|water|ml|15'],[
      'Rửa đậu que, cắt bỏ hai đầu và tước xơ nếu có; cắt khúc 4 cm. Thái thịt thật mỏng, băm tỏi và hành tím.',
      'Ướp thịt với 10 ml nước mắm, đường và tiêu 10 phút trong tủ lạnh.',
      'Trụng đậu trong nước sôi 2 phút rồi vớt vào nước mát; để ráo. Bước này giúp đậu chín nhanh mà vẫn xanh.',
      'Phi thơm hành tỏi, xào thịt trên lửa lớn đến vừa chín. Cho đậu vào, đảo 3–4 phút.',
      'Nêm phần nước mắm còn lại và 1 thìa canh nước; đảo đến khi đậu mềm giòn, thịt chín rồi tắt bếp.'
    ],[
      'Rinse the green beans, trim both ends, remove strings if present, and cut into 4 cm pieces. Slice pork thinly; mince garlic and shallot.',
      'Marinate pork with 10 ml fish sauce, sugar, and pepper for 10 minutes in the refrigerator.',
      'Blanch beans in boiling water for 2 minutes, cool briefly, and drain. This helps them cook quickly and stay green.',
      'Sauté shallot and garlic, stir-fry pork over high heat until nearly done, then add beans for 3–4 minutes.',
      'Add remaining fish sauce and 1 tablespoon water. Toss until beans are crisp-tender and pork is cooked through.'
    ]),
    'steamed-egg-pork':rec(['trứng gà|eggs|quả|4','thịt heo xay|ground pork|g|160','nấm mèo khô|dried wood ear mushrooms|g|8','hành tím|shallot|g|20','hành lá|spring onion|g|15','nước mắm|fish sauce|ml|15','tiêu đen|black pepper|g|2','dầu mè|sesame oil|ml|5','nước lọc|water|ml|30'],[
      'Ngâm nấm mèo khô trong nước ấm 15 phút, rửa lại và thái nhỏ. Băm hành tím, cắt hành lá.',
      'Trộn thịt với hành tím, nấm, 5 ml nước mắm, tiêu và dầu mè; để 10 phút.',
      'Đập trứng vào tô, thêm phần nước mắm còn lại và 2 thìa canh nước trong lượng đã chuẩn bị; đánh vừa tan rồi lọc nếu muốn mặt trứng mịn.',
      'Trộn trứng với thịt, đổ vào đĩa sâu chịu nhiệt. Hấp trên nước sôi nhẹ 20–25 phút, đậy khăn dưới nắp để nước không nhỏ xuống.',
      'Đo giữa tô, hỗn hợp thịt heo xay cần đạt 71°C và trứng đông hẳn. Rắc hành lá, để nghỉ 2 phút rồi dùng.'
    ],[
      'Soak dried wood ear mushrooms in warm water for 15 minutes, rinse, and mince. Mince shallot and slice scallions.',
      'Mix pork with shallot, mushrooms, 5 ml fish sauce, pepper, and sesame oil. Rest 10 minutes.',
      'Beat the eggs with remaining fish sauce and 2 tablespoons of the listed water until just combined; strain for a smoother custard if desired.',
      'Combine egg and pork in a heatproof shallow bowl. Steam over gently simmering water for 20–25 minutes, with a cloth under the lid to catch drips.',
      'Check the center reaches 71°C and the egg is fully set. Add scallions, rest 2 minutes, and serve.'
    ]),
    'ginger-chicken':rec(['thịt gà|chicken|g|550','gừng|ginger|g|35','hành tím|shallot|g|25','tỏi|garlic|g|10','nước mắm|fish sauce|ml|25','đường|sugar|g|8','nước lọc|water|ml|180','tiêu đen|black pepper|g|2'],[
      'Chặt gà miếng 4 cm, dùng khăn giấy thấm khô. Gọt gừng; thái một nửa sợi, phần còn lại đập dập. Băm hành tím và tỏi.',
      'Ướp gà với nước mắm, đường, tiêu, hành tím và tỏi 20 phút trong tủ lạnh.',
      'Phi thơm gừng đập dập, cho gà vào áp chảo đến săn các mặt, khoảng 5 phút.',
      'Thêm nước, đậy nắp kho lửa nhỏ 20 phút. Mở nắp, đảo và nấu thêm đến khi phần dày nhất của gà đạt 74°C và nước sốt sánh.',
      'Rắc gừng thái sợi rồi dọn.'
    ],[
      'Cut chicken into 4 cm pieces and pat dry. Peel the ginger; julienne half and crush the rest. Mince shallot and garlic.',
      'Marinate chicken with fish sauce, sugar, pepper, shallot, and garlic for 20 minutes in the refrigerator.',
      'Sauté crushed ginger, add chicken, and sear about 5 minutes until browned on the outside.',
      'Add water, cover, and braise gently for 20 minutes. Uncover, turn the chicken, and reduce until the thickest part reaches 74°C and the sauce is glossy.',
      'Add julienned ginger and serve.'
    ]),
    'lemongrass-chicken':rec(['thịt gà|chicken|g|500','sả|lemongrass|cây|3','hành tím|shallot|g|25','tỏi|garlic|g|12','ớt đỏ|red chili|quả|1','nước mắm|fish sauce|ml|22','đường|sugar|g|8','dầu ăn|cooking oil|ml|12','tiêu đen|black pepper|g|1.5','nước lọc|water|ml|30'],[
      'Chặt gà miếng nhỏ vừa ăn và thấm khô. Bỏ lớp sả già, rửa sạch; băm nhuyễn phần gốc trắng, thái lát phần non. Băm hành tỏi, bỏ hạt ớt nếu muốn ít cay.',
      'Ướp gà với nước mắm, đường, tiêu, 2/3 lượng sả và hành tỏi 20 phút trong tủ lạnh.',
      'Làm nóng chảo với dầu, phi phần sả còn lại đến thơm. Cho gà vào xào lửa lớn 5–6 phút.',
      'Hạ lửa vừa, đảo thêm 5–7 phút đến khi phần dày nhất của gà đạt 74°C; thêm 1–2 thìa canh nước nếu chảo khô quá nhanh.',
      'Cho ớt vào cuối cùng, nếm lại và dọn khi sả bám quanh miếng gà.'
    ],[
      'Cut chicken into bite-size pieces and pat dry. Peel off tough lemongrass layers, rinse, finely mince the white base, and slice the tender part. Mince shallot and garlic; remove chili seeds for less heat.',
      'Marinate chicken with fish sauce, sugar, pepper, two-thirds of the lemongrass, shallot, and garlic for 20 minutes in the refrigerator.',
      'Heat oil and fry the remaining lemongrass until fragrant. Add chicken and stir-fry over high heat for 5–6 minutes.',
      'Lower to medium and cook another 5–7 minutes, checking the thickest piece reaches 74°C; add 1–2 tablespoons water if the pan dries too quickly.',
      'Add chili at the end, taste, and serve when the lemongrass coats the chicken.'
    ]),
    'fish-sauce-chicken':rec(['thịt gà|chicken|g|500','bột bắp|cornstarch|g|25','tỏi|garlic|g|15','nước mắm|fish sauce|ml|22','đường|sugar|g|16','chanh|lime|quả|0.5','dầu ăn|cooking oil|ml|250','nước lọc|water|ml|15'],[
      'Chặt gà miếng nhỏ, thấm thật khô. Băm tỏi. Vắt chanh riêng; khuấy nước mắm, đường và 1 thìa canh nước thành sốt.',
      'Áo gà một lớp bột bắp mỏng ngay trước khi chiên; không ướp nước mắm lâu để lớp áo giòn.',
      'Đun dầu sâu khoảng 2 cm ở lửa vừa. Chiên gà theo mẻ 8–10 phút tùy kích thước; kiểm tra phần dày nhất đạt 74°C rồi để ráo trên giá.',
      'Đổ bớt dầu, giữ lại 1 thìa canh. Phi tỏi, cho sốt vào đun sôi 30–60 giây đến hơi sánh.',
      'Cho gà vào đảo nhanh cho áo sốt, tắt bếp rồi vắt chút chanh. Dọn ngay để giữ giòn.'
    ],[
      'Cut chicken into small pieces and pat very dry. Mince the garlic. Juice the lime; mix fish sauce, sugar, and 1 tablespoon water.',
      'Dust the chicken lightly with cornstarch just before frying; do not marinate in fish sauce, which softens the coating.',
      'Heat oil about 2 cm deep over medium heat. Fry in batches for 8–10 minutes depending on size; check the thickest piece reaches 74°C, then drain on a rack.',
      'Pour off excess oil, leaving 1 tablespoon. Sauté garlic, add the sauce, and simmer 30–60 seconds until slightly thickened.',
      'Toss chicken quickly in the glaze, turn off the heat, and add a squeeze of lime. Serve immediately while crisp.'
    ]),
    'chicken-mushroom':rec(['thịt gà|chicken|g|500','nấm hương tươi|fresh shiitake mushrooms|g|180','hành tím|shallot|g|25','gừng|ginger|g|15','nước mắm|fish sauce|ml|22','dầu hào|oyster sauce|ml|12','nước lọc|water|ml|180','tiêu đen|black pepper|g|2','hành lá|spring onion|g|10'],[
      'Chặt gà miếng 4 cm và thấm khô. Bỏ chân nấm cứng, lau nấm bằng khăn ẩm rồi bổ đôi; thái gừng và băm hành tím.',
      'Ướp gà với nước mắm, dầu hào, tiêu và hành tím 15 phút trong tủ lạnh.',
      'Phi thơm gừng, cho gà vào đảo săn 4–5 phút. Thêm nấm, đảo thêm 2 phút.',
      'Đổ nước, đậy nắp và kho nhỏ lửa 18–22 phút; kiểm tra phần dày nhất đạt 74°C rồi mở nắp nấu thêm cho nước sốt hơi sánh.',
      'Nếm lại, rắc hành lá và dọn. Không ngâm nấm lâu vì nấm sẽ hút nước.'
    ],[
      'Cut chicken into 4 cm pieces and pat dry. Trim tough mushroom stems, wipe caps with a damp cloth, and halve. Slice ginger and mince shallot.',
      'Marinate chicken with fish sauce, oyster sauce, pepper, and shallot for 15 minutes in the refrigerator.',
      'Sauté ginger, add chicken, and brown for 4–5 minutes. Add mushrooms and cook 2 minutes more.',
      'Add water, cover, and braise gently 18–22 minutes; check the thickest piece reaches 74°C, then uncover and reduce the sauce slightly.',
      'Taste, finish with scallions, and serve. Do not soak mushrooms for long or they will absorb water.'
    ]),
    'chicken-boiled':rec(['gà ta|whole chicken|g|1100','gừng|ginger|g|30','sả|lemongrass|cây|2','muối|salt|g|8','hành lá|spring onion|g|20','chanh|lime|quả|1','nước mắm|fish sauce|ml|25'],[
      'Lấy túi lòng nếu có, lau sạch khoang bụng bằng khăn giấy. Không rửa gà dưới vòi nước; thấm khô và rửa tay, thớt sau khi chạm gà sống.',
      'Đập dập gừng và sả. Đặt gà vào nồi, đổ nước lạnh ngập 2/3 con, thêm muối, gừng và sả.',
      'Đun đến sôi lăn tăn rồi hạ lửa thấp; không để sôi cuộn. Hớt bọt và luộc khoảng 35–45 phút tùy cỡ gà.',
      'Đo ở phần dày nhất của đùi, tránh chạm xương; gà cần đạt 74°C. Nếu chưa đạt, luộc thêm 5 phút rồi đo lại. Tắt bếp, đậy nắp 10 phút.',
      'Vớt gà, để nguội bớt rồi chặt. Pha nước mắm với chanh; dùng hành lá và nước luộc làm canh.'
    ],[
      'Remove the giblet packet if present and wipe the cavity with paper towel. Do not rinse raw chicken under running water; pat dry and wash hands and tools after handling.',
      'Crush ginger and lemongrass. Put chicken in a pot, cover two-thirds with cool water, and add salt, ginger, and lemongrass.',
      'Bring to a gentle simmer, not a rolling boil. Skim foam and cook about 35–45 minutes depending on size.',
      'Measure the thickest part of the thigh without touching bone; the chicken should reach 74°C. If not, simmer 5 minutes more and check again. Turn off heat, cover, and rest 10 minutes.',
      'Lift out, cool slightly, and chop. Mix fish sauce with lime for dipping; use scallions and the broth as soup.'
    ]),
    'fish-fried':rec(['cá phi lê|white fish fillet|g|500','muối|salt|g|4','tiêu đen|black pepper|g|2','bột nghệ|turmeric|g|2','thì là|dill|g|15','dầu ăn|cooking oil|ml|45','chanh|lime|quả|0.5'],[
      'Kiểm tra xương dăm, gỡ bằng nhíp. Rửa cá thật nhanh dưới nước mát nếu cần rồi thấm khô kỹ; cắt miếng 5 cm.',
      'Ướp cá với muối, tiêu và nghệ 10 phút trong tủ lạnh. Rửa thì là, để ráo và cắt khúc.',
      'Làm nóng dầu ở lửa vừa. Đặt cá xuống chảo, để yên 3–4 phút cho mặt dưới vàng rồi mới lật nhẹ.',
      'Chiên mặt còn lại 2–4 phút tùy độ dày; cá chín khi thịt đục và dễ tách lớp. Gắp ra giấy thấm.',
      'Rắc thì là, vắt chanh và dùng ngay. Không đảo mạnh để cá không vỡ.'
    ],[
      'Check for pin bones and remove with tweezers. Rinse fish briefly under cool water only if needed, pat very dry, and cut into 5 cm pieces.',
      'Season with salt, pepper, and turmeric for 10 minutes in the refrigerator. Rinse and drain the dill, then cut into lengths.',
      'Heat oil over medium. Lay fish in the pan and leave undisturbed 3–4 minutes until the underside is golden before turning gently.',
      'Cook the other side 2–4 minutes depending on thickness; fish is done when opaque and flakes easily. Drain on paper towel.',
      'Add dill, squeeze lime, and serve immediately. Avoid stirring so the fish stays intact.'
    ]),
    'fish-tomato':rec(['cá phi lê|fish fillet|g|450','cà chua|tomato|g|350','hành tím|shallot|g|25','tỏi|garlic|g|10','hành lá|spring onion|g|20','nước mắm|fish sauce|ml|22','đường|sugar|g|5','dầu ăn|cooking oil|ml|18','tiêu đen|black pepper|g|1.5','nước lọc|water|ml|30'],[
      'Kiểm tra xương cá, cắt miếng 5 cm. Rửa nhanh nếu cần và thấm khô; rửa cà chua rồi bổ múi cau. Băm hành tím, tỏi; cắt hành lá.',
      'Ướp cá với 8 ml nước mắm, tiêu và một nửa hành tím 10 phút trong tủ lạnh.',
      'Áp chảo cá với dầu 1–2 phút mỗi mặt cho săn, gắp ra nhẹ tay. Không cần chiên chín hẳn.',
      'Phi thơm hành tím và tỏi còn lại. Cho cà chua, đường và 2 thìa canh nước vào, đậy nắp 5 phút rồi dằm nhẹ.',
      'Nêm nước mắm còn lại, đặt cá lên sốt và rim nhỏ lửa 5–7 phút đến khi cá chín. Rắc hành lá.'
    ],[
      'Check for bones and cut fish into 5 cm pieces. Rinse briefly if needed and pat dry. Rinse and wedge tomatoes; mince shallot and garlic, slice scallions.',
      'Marinate fish with 8 ml fish sauce, pepper, and half the shallot for 10 minutes in the refrigerator.',
      'Sear fish in oil for 1–2 minutes per side until firm, then carefully remove; it need not be fully cooked yet.',
      'Sauté remaining shallot and garlic. Add tomato, sugar, and 2 tablespoons water; cover 5 minutes, then gently break up the tomato.',
      'Season with remaining fish sauce, nestle fish in the sauce, and simmer 5–7 minutes until cooked through. Finish with scallions.'
    ]),
    'caramel-fish':rec(['cá basa hoặc cá lóc|catfish or snakehead|g|500','hành tím|shallot|g|25','tỏi|garlic|g|10','nước mắm|fish sauce|ml|25','đường|sugar|g|18','tiêu đen|black pepper|g|4','nước dừa tươi|fresh coconut water|ml|180','dầu ăn|cooking oil|ml|10'],[
      'Cá cắt khúc dày 3 cm. Rửa nhanh, thấm thật khô để không bắn dầu. Băm hành tím và tỏi.',
      'Ướp cá với nước mắm, tiêu, hành tím và tỏi 15 phút; trở cá nhẹ một lần giữa thời gian ướp.',
      'Thắng đường với 1 thìa cà phê nước đến màu nâu hổ phách. Cho cá vào áp chảo nhẹ mỗi mặt 1 phút.',
      'Rót nước dừa quanh cá, đun sôi rồi hạ lửa nhỏ. Kho hé nắp 15–20 phút, không đảo; lắc nồi nhẹ để sốt phủ cá.',
      'Khi sốt sánh và cá chín tới, nếm lại nước mắm/tiêu rồi tắt bếp.'
    ],[
      'Cut fish into 3 cm steaks. Rinse briefly and pat very dry to prevent splatter. Mince shallot and garlic.',
      'Marinate fish with fish sauce, pepper, shallot, and garlic for 15 minutes, turning gently once.',
      'Caramelize sugar with 1 teaspoon water until amber. Lightly sear each side of the fish for 1 minute.',
      'Pour coconut water around the fish, bring to a boil, then partly cover and simmer 15–20 minutes. Do not stir; gently shake the pot to coat.',
      'When the sauce is glossy and the fish is just cooked, adjust fish sauce and pepper, then turn off the heat.'
    ]),
    'fish-steamed':rec(['cá nguyên con hoặc phi lê|whole fish or fillet|g|550','gừng|ginger|g|35','hành lá|spring onion|g|30','nước tương|soy sauce|ml|18','dầu mè|sesame oil|ml|5','rượu nấu ăn|cooking wine|ml|10','tiêu trắng|white pepper|g|2'],[
      'Nếu dùng cá nguyên con: bỏ mang và ruột, cạo sạch vảy, rạch 2 đường mỗi bên; rửa nhanh khoang bụng và thấm khô. Phi lê thì kiểm tra xương dăm.',
      'Thái gừng sợi, cắt hành lá đoạn 5 cm. Xát cá với rượu, tiêu và một nửa gừng; để 10 phút.',
      'Đặt cá lên đĩa chịu nhiệt, rải phần gừng còn lại. Hấp trên nước sôi mạnh 8–12 phút với phi lê hoặc 15–20 phút với cá nguyên con.',
      'Kiểm tra phần dày nhất: thịt cá đục và tách lớp. Đun nóng nước tương cùng dầu mè trong chảo nhỏ rồi rưới lên cá; rắc hành lá.',
      'Đậy nắp thêm 30 giây cho hành vừa xẹp rồi dọn nóng.'
    ],[
      'For a whole fish, remove gills and innards, scale it, and score each side twice; briefly rinse the cavity and pat dry. Check fillets for pin bones.',
      'Julienne ginger and cut scallions into 5 cm lengths. Rub fish with wine, pepper, and half the ginger; rest 10 minutes.',
      'Set fish on a heatproof plate and scatter remaining ginger. Steam over vigorously boiling water 8–12 minutes for fillets or 15–20 for a whole fish.',
      'Check the thickest part; the flesh should be opaque and flake. Warm the soy sauce and sesame oil in a small pan, drizzle over the fish, and add scallions.',
      'Cover for 30 seconds to wilt the scallions and serve hot.'
    ]),
    'shrimp-caramel':rec(['tôm sú hoặc tôm thẻ|prawns or shrimp|g|400','hành tím|shallot|g|25','tỏi|garlic|g|10','nước mắm|fish sauce|ml|22','đường|sugar|g|14','tiêu đen|black pepper|g|2','dầu ăn|cooking oil|ml|10','nước lọc|water|ml|30'],[
      'Bẻ đầu, bóc vỏ nếu muốn, rạch lưng tôm và rút chỉ đen. Rửa nhanh, để ráo thật kỹ. Băm hành tím và tỏi.',
      'Ướp tôm với 10 ml nước mắm, tiêu và một nửa hành tỏi 10 phút trong tủ lạnh.',
      'Thắng đường với 1 thìa cà phê nước đến màu vàng hổ phách. Phi phần hành tỏi còn lại trong dầu.',
      'Cho tôm vào xào lửa lớn 1–2 phút đến chuyển hồng. Thêm nước mắm còn lại và nước, đảo đều.',
      'Rim thêm 2–3 phút đến khi tôm cuộn, chín đục và sốt bám bóng; không nấu lâu làm tôm dai.'
    ],[
      'Remove heads, peel if desired, slit the back, and pull out the dark vein. Rinse briefly and drain very well. Mince shallot and garlic.',
      'Marinate shrimp with 10 ml fish sauce, pepper, and half the shallot and garlic for 10 minutes in the refrigerator.',
      'Caramelize sugar with 1 teaspoon water until amber. Sauté the remaining aromatics in oil.',
      'Add shrimp and stir-fry over high heat 1–2 minutes until pink. Add remaining fish sauce and water; toss.',
      'Simmer 2–3 minutes until curled, opaque, and glossy. Avoid overcooking, which makes shrimp tough.'
    ]),
    'shrimp-veg':rec(['tôm|shrimp|g|300','bông cải xanh|broccoli|g|180','cà rốt|carrot|g|100','ớt chuông|bell pepper|g|100','tỏi|garlic|g|12','nước mắm|fish sauce|ml|18','dầu ăn|cooking oil|ml|12','bột bắp|cornstarch|g|5','tiêu đen|black pepper|g|1.5','nước lọc|water|ml|90'],[
      'Rút chỉ lưng tôm, rửa nhanh và thấm khô. Rửa bông cải, tách bông nhỏ; gọt cà rốt thái lát xéo, bỏ hạt ớt chuông và cắt miếng.',
      'Ướp tôm với 8 ml nước mắm và tiêu 10 phút trong tủ lạnh. Hòa bột bắp với 60 ml nước.',
      'Trụng bông cải 1 phút, vớt ráo. Phi tỏi, xào tôm lửa lớn đến vừa hồng rồi gắp ra.',
      'Xào cà rốt 2 phút với 2 thìa canh nước; thêm ớt chuông và bông cải, đảo 2 phút.',
      'Cho tôm trở lại, thêm phần nước mắm còn lại và nước bột bắp, đảo đến sốt trong sánh nhẹ và tôm chín.'
    ],[
      'Devein shrimp, rinse briefly, and pat dry. Rinse broccoli and separate florets; peel and diagonally slice carrot; seed and chop bell pepper.',
      'Season shrimp with 8 ml fish sauce and pepper for 10 minutes in the refrigerator. Mix cornstarch with 60 ml water.',
      'Blanch broccoli for 1 minute and drain. Sauté garlic, stir-fry shrimp until just pink, and remove.',
      'Cook carrot for 2 minutes with 2 tablespoons water; add bell pepper and broccoli and stir 2 minutes more.',
      'Return shrimp; add remaining fish sauce and cornstarch water. Toss until the clear sauce lightly thickens and shrimp are cooked.'
    ]),
    'scallion-omelet':rec(['trứng gà|eggs|quả|4','hành lá|spring onion|g|30','nước mắm|fish sauce|ml|10','tiêu đen|black pepper|g|1','dầu ăn|cooking oil|ml|15'],[
      'Rửa hành lá, để ráo; thái nhỏ cả phần trắng và xanh. Đập trứng vào tô.',
      'Đánh trứng với nước mắm và tiêu khoảng 20 giây; trộn hành lá vào ngay trước khi chiên.',
      'Làm nóng chảo chống dính với dầu ở lửa vừa. Đổ trứng, nghiêng chảo để trứng dàn đều.',
      'Chiên 2–3 phút đến khi mép se và mặt dưới vàng. Gập đôi hoặc lật nhẹ, chiên thêm 1 phút đến khi trứng chín.',
      'Để nghỉ 1 phút rồi cắt miếng; không để lửa quá lớn làm mặt ngoài cháy mà giữa còn lỏng.'
    ],[
      'Rinse scallions, drain, and finely slice both white and green parts. Crack the eggs into a bowl.',
      'Beat eggs with fish sauce and pepper for about 20 seconds; stir in scallions just before cooking.',
      'Heat oil in a nonstick pan over medium heat. Pour in the eggs and tilt the pan to spread evenly.',
      'Cook 2–3 minutes until edges set and the bottom is golden. Fold or gently flip and cook 1 minute until set.',
      'Rest 1 minute and slice. Keep the heat moderate so the outside does not burn while the center stays runny.'
    ]),
    'pork-omelet':rec(['trứng gà|eggs|quả|4','thịt heo xay|ground pork|g|160','hành tím|shallot|g|20','hành lá|spring onion|g|20','nước mắm|fish sauce|ml|12','tiêu đen|black pepper|g|2','dầu ăn|cooking oil|ml|15'],[
      'Băm hành tím, thái hành lá. Đập trứng ra tô và đánh tan.',
      'Ướp thịt xay với 5 ml nước mắm, tiêu và hành tím 10 phút trong tủ lạnh.',
      'Phi thơm hành tím với ít dầu; cho thịt vào đảo tơi đến chín hoàn toàn, khoảng 5 phút. Để nguội 2 phút.',
      'Trộn thịt với trứng, hành lá và phần nước mắm còn lại. Đun nóng chảo với dầu, đổ hỗn hợp vào.',
      'Chiên lửa nhỏ 3–4 phút đến khi đáy vàng và mặt se; gập/lật cẩn thận, chiên thêm 2–3 phút cho trứng chín hẳn.'
    ],[
      'Mince shallot and slice scallions. Crack the eggs into a bowl and beat.',
      'Season ground pork with 5 ml fish sauce, pepper, and shallot for 10 minutes in the refrigerator.',
      'Sauté shallot in a little oil; add pork and break it up. Cook fully, about 5 minutes, then cool 2 minutes.',
      'Mix pork with eggs, scallions, and remaining fish sauce. Heat oil in a pan and pour in the mixture.',
      'Cook over low heat 3–4 minutes until the base is golden and top begins to set. Fold or flip carefully and cook 2–3 minutes until fully set.'
    ]),
    'tomato-eggs':rec(['trứng gà|eggs|quả|4','cà chua|tomato|g|300','hành tím|shallot|g|20','hành lá|spring onion|g|15','nước mắm|fish sauce|ml|15','đường|sugar|g|5','dầu ăn|cooking oil|ml|12','nước lọc|water|ml|45'],[
      'Rửa cà chua, bỏ cuống và bổ múi cau. Băm hành tím, thái hành lá; đánh trứng với 5 ml nước mắm.',
      'Đun nóng nửa lượng dầu, đổ trứng vào khuấy nhẹ thành miếng mềm vừa chín; gắp ra khi còn hơi ẩm.',
      'Thêm dầu còn lại, phi hành tím. Cho cà chua và đường vào, đảo 2 phút; thêm 3 thìa canh nước, đậy 4 phút cho mềm.',
      'Nêm phần nước mắm còn lại. Cho trứng trở lại chảo, đảo nhẹ 1 phút để sốt phủ trứng.',
      'Rắc hành lá, tắt bếp khi trứng vừa chín để không bị khô.'
    ],[
      'Rinse tomatoes, remove stems, and cut into wedges. Mince shallot, slice scallions, and beat eggs with 5 ml fish sauce.',
      'Heat half the oil, add eggs, and gently scramble until softly set; remove while still slightly moist.',
      'Add remaining oil and sauté shallot. Add tomato and sugar for 2 minutes, then 3 tablespoons water; cover 4 minutes until soft.',
      'Season with remaining fish sauce. Return eggs and fold gently for 1 minute so the sauce coats them.',
      'Add scallions and turn off the heat while eggs are just set to keep them tender.'
    ]),
    'tofu-tomato':rec(['đậu hũ trắng|firm tofu|bìa|3','cà chua|tomato|g|350','hành tím|shallot|g|20','tỏi|garlic|g|10','hành lá|spring onion|g|15','nước mắm|fish sauce|ml|18','đường|sugar|g|5','dầu ăn|cooking oil|ml|20','nước lọc|water|ml|45'],[
      'Thấm khô đậu hũ, cắt miếng dày 1.5 cm. Rửa cà chua, bỏ cuống và thái hạt lựu; băm hành tím, tỏi.',
      'Chiên đậu với một nửa dầu, lật nhẹ đến vàng hai mặt; gắp ra giấy thấm.',
      'Phi hành tím và tỏi với phần dầu còn lại. Cho cà chua, đường và 3 thìa canh nước vào, nấu 5 phút đến mềm.',
      'Nêm nước mắm, cho đậu vào chảo và om nhỏ lửa 5 phút; trở đậu một lần để thấm sốt.',
      'Rắc hành lá, nếm lại và dọn khi sốt bám quanh đậu.'
    ],[
      'Pat tofu dry and cut into 1.5 cm slices. Rinse, stem, and dice tomatoes; mince shallot and garlic.',
      'Fry tofu in half the oil, turning gently until golden on both sides. Drain on paper towel.',
      'Sauté shallot and garlic in the remaining oil. Add tomato, sugar, and 3 tablespoons water; cook 5 minutes until soft.',
      'Season with fish sauce, add tofu, and simmer gently 5 minutes, turning once so it absorbs the sauce.',
      'Finish with scallions, taste, and serve when the sauce clings to the tofu.'
    ]),
    'tofu-lemongrass':rec(['đậu hũ trắng|firm tofu|bìa|3','sả|lemongrass|cây|3','tỏi|garlic|g|12','ớt đỏ|red chili|quả|1','nước mắm|fish sauce|ml|15','nước tương|soy sauce|ml|10','dầu ăn|cooking oil|ml|25','nước lọc|water|ml|30'],[
      'Thấm khô đậu hũ, cắt khối 2 cm. Bỏ lớp sả già, rửa sạch và băm nhỏ phần gốc; băm tỏi, thái ớt.',
      'Chiên đậu ở lửa vừa đến vàng các mặt, khoảng 6–8 phút; gắp ra.',
      'Chắt bớt dầu, để lại 1 thìa canh. Phi sả và tỏi 1 phút đến thơm, không để cháy.',
      'Cho nước mắm, nước tương và 2 thìa canh nước vào. Thêm đậu, đảo nhẹ 2–3 phút cho gia vị bám.',
      'Thêm ớt tùy khẩu vị, tắt bếp khi đậu khô ráo và thơm sả.'
    ],[
      'Pat tofu dry and cut into 2 cm cubes. Peel tough lemongrass layers, rinse, and mince the tender base; mince garlic and slice chili.',
      'Fry tofu over medium heat until golden on all sides, about 6–8 minutes; remove.',
      'Pour off excess oil, leaving 1 tablespoon. Sauté lemongrass and garlic for 1 minute without browning.',
      'Add fish sauce, soy sauce, and 2 tablespoons water. Return tofu and toss gently 2–3 minutes to coat.',
      'Add chili to taste and turn off the heat when tofu is fragrant and lightly dry.'
    ]),
    'beef-onion':rec(['thịt bò|beef|g|350','hành tây|onion|củ|1','tỏi|garlic|g|12','nước mắm|fish sauce|ml|12','nước tương|soy sauce|ml|12','bột bắp|cornstarch|g|5','dầu ăn|cooking oil|ml|15','tiêu đen|black pepper|g|2'],[
      'Thái bò ngang thớ thành lát mỏng. Bóc vỏ hành tây, cắt múi cau; băm tỏi.',
      'Ướp bò với nước mắm, nước tương, tiêu và bột bắp 15 phút; bột bắp giúp thịt giữ nước.',
      'Làm nóng chảo thật nóng, cho một nửa dầu và xào bò thành từng mẻ 45–60 giây. Gắp ra khi vừa đổi màu.',
      'Thêm dầu còn lại, phi tỏi rồi xào hành tây 2 phút cho hơi trong nhưng còn giòn.',
      'Cho bò và nước thịt trở lại, đảo nhanh 30 giây, nếm lại rồi tắt bếp.'
    ],[
      'Slice beef thinly across the grain. Peel and wedge the onion; mince garlic.',
      'Marinate beef with fish sauce, soy sauce, pepper, and cornstarch for 15 minutes; cornstarch helps keep it juicy.',
      'Heat the pan until very hot. Add half the oil and sear beef in batches for 45–60 seconds. Remove as soon as it changes color.',
      'Add remaining oil, sauté garlic, then stir-fry onion 2 minutes until slightly translucent but crisp.',
      'Return beef and juices, toss 30 seconds, adjust seasoning, and turn off the heat.'
    ]),
    'soup-malong':rec(['rau ngót|sweet leaf|g|250','thịt heo xay|ground pork|g|150','hành tím|shallot|g|15','nước mắm|fish sauce|ml|12','muối|salt|g|3','nước lọc|water|ml|900','dầu ăn|cooking oil|ml|5','tiêu đen|black pepper|g|1.5'],[
      'Nhặt lá rau ngót, bỏ cọng già và lá vàng. Rửa 2–3 lần trong chậu nước sạch, vò nhẹ một phần lá rồi để ráo.',
      'Ướp thịt xay với nước mắm, tiêu và hành tím băm 10 phút trong tủ lạnh.',
      'Phi hành tím với chút dầu; cho thịt vào đảo tơi đến khi săn. Đổ 900 ml nước, đun sôi và hớt bọt.',
      'Cho rau ngót vào, khuấy tách lá. Nấu 3–4 phút đến khi rau mềm nhưng còn xanh.',
      'Nêm muối/nước mắm vừa ăn, tắt bếp ngay để rau không nhũn.'
    ],[
      'Pick sweet-leaf greens from the tough stems and discard yellow leaves. Rinse 2–3 times in clean water, gently scrunch some leaves, and drain.',
      'Season ground pork with fish sauce, pepper, and minced shallot for 10 minutes in the refrigerator.',
      'Sauté shallot in a little oil; add pork and break it up until firm. Add 900 ml water, bring to a boil, and skim.',
      'Add greens and stir to separate the leaves. Cook 3–4 minutes until tender but still green.',
      'Season with salt or fish sauce and turn off heat promptly so the greens do not become mushy.'
    ]),
    'soup-pumpkin':rec(['bí đỏ|pumpkin|g|400','tôm khô|dried shrimp|g|25','hành tím|shallot|g|15','hành lá|spring onion|g|12','nước lọc|water|ml|850','muối|salt|g|4','nước mắm|fish sauce|ml|8'],[
      'Gọt vỏ bí, bỏ hạt và phần xơ; rửa sạch rồi cắt miếng 2 cm. Ngâm tôm khô nước ấm 10 phút, rửa lại và để ráo.',
      'Phi hành tím, cho tôm khô vào đảo 1 phút cho dậy mùi.',
      'Đổ 850 ml nước, đun sôi. Thêm bí đỏ, nấu lửa vừa 10–12 phút đến khi bí xuyên đũa được nhưng chưa nát.',
      'Nêm muối và nước mắm. Dằm nhẹ vài miếng bí để nước canh có độ ngọt sánh.',
      'Rắc hành lá, tắt bếp và dùng nóng.'
    ],[
      'Peel pumpkin, remove seeds and fibrous center, rinse, and cut into 2 cm pieces. Soak dried shrimp in warm water 10 minutes, rinse, and drain.',
      'Sauté shallot, add dried shrimp, and stir 1 minute until fragrant.',
      'Add 850 ml water and bring to a boil. Add pumpkin and simmer 10–12 minutes until a chopstick pierces it but it is not falling apart.',
      'Season with salt and fish sauce. Lightly mash a few pieces to give the broth body.',
      'Add scallions, turn off the heat, and serve hot.'
    ]),
    'soup-wintermelon':rec(['bí đao|winter melon|g|350','thịt heo xay|ground pork|g|150','hành tím|shallot|g|15','hành lá|spring onion|g|12','nước lọc|water|ml|900','nước mắm|fish sauce|ml|12','muối|salt|g|3','tiêu đen|black pepper|g|1.5'],[
      'Gọt vỏ bí đao, bỏ ruột già và hạt; rửa sạch rồi cắt lát dày 1 cm. Băm hành tím, cắt hành lá.',
      'Ướp thịt với 7 ml nước mắm, tiêu và một nửa hành tím 10 phút trong tủ lạnh.',
      'Phi hành tím còn lại, cho thịt vào đảo tơi. Thêm 900 ml nước, đun sôi và hớt bọt.',
      'Cho bí đao vào nấu 8–10 phút đến khi trong nhẹ và vừa mềm; không nấu lâu làm bí nát.',
      'Nêm phần nước mắm còn lại và muối; rắc hành lá, tắt bếp.'
    ],[
      'Peel the winter melon, remove mature seeds and pith, rinse, and slice 1 cm thick. Mince shallot and slice scallions.',
      'Season pork with 7 ml fish sauce, pepper, and half the shallot for 10 minutes in the refrigerator.',
      'Sauté remaining shallot, add pork and break it up. Add 900 ml water, bring to a boil, and skim.',
      'Add winter melon and cook 8–10 minutes until slightly translucent and just tender; do not overcook.',
      'Season with remaining fish sauce and salt, add scallions, and turn off the heat.'
    ]),
    'soup-cabbage':rec(['cải xanh|mustard greens|g|250','thịt heo xay|ground pork|g|150','gừng|ginger|g|8','hành tím|shallot|g|12','nước lọc|water|ml|900','nước mắm|fish sauce|ml|12','muối|salt|g|3','tiêu đen|black pepper|g|1.5'],[
      'Tách từng lá cải, bỏ lá dập. Rửa kỹ phần bẹ vì dễ dính đất; để ráo rồi cắt khúc 3 cm. Thái gừng sợi.',
      'Ướp thịt xay với 7 ml nước mắm, tiêu và hành tím băm 10 phút trong tủ lạnh.',
      'Phi hành tím, cho thịt vào đảo tơi. Thêm nước và gừng, đun sôi, hớt bọt.',
      'Cho phần bẹ cải vào trước 2 phút, sau đó thêm lá; nấu thêm 2–3 phút đến khi rau vừa mềm.',
      'Nêm nước mắm và muối, tắt bếp. Tránh nấu quá lâu để cải không đắng và xỉn màu.'
    ],[
      'Separate mustard-green leaves and discard damaged ones. Rinse the stems carefully to remove grit, drain, and cut into 3 cm lengths. Julienne ginger.',
      'Season ground pork with 7 ml fish sauce, pepper, and minced shallot for 10 minutes in the refrigerator.',
      'Sauté shallot, add pork and break it up. Add water and ginger, bring to a boil, and skim.',
      'Add the thicker stems first for 2 minutes, then add leaves; cook 2–3 minutes until just tender.',
      'Season with fish sauce and salt, then turn off the heat. Overcooking can make the greens bitter and dull.'
    ]),
    'soup-morning':rec(['mồng tơi|Malabar spinach|g|180','mướp|luffa|g|200','tôm khô|dried shrimp|g|20','hành tím|shallot|g|12','nước lọc|water|ml|850','muối|salt|g|3','nước mắm|fish sauce|ml|8'],[
      'Nhặt mồng tơi bỏ cọng già, rửa 2 lần và cắt khúc 4 cm. Gọt mướp, rửa rồi thái khoanh dày 1 cm.',
      'Ngâm tôm khô nước ấm 10 phút, rửa lại. Phi hành tím, cho tôm vào đảo thơm.',
      'Thêm 850 ml nước, đun sôi. Cho mướp vào nấu 3–4 phút đến khi gần mềm.',
      'Thêm mồng tơi, khuấy nhẹ và nấu thêm 2 phút. Rau vừa xẹp là được.',
      'Nêm nước mắm, muối; tắt bếp để rau giữ màu xanh.'
    ],[
      'Pick Malabar spinach, discard tough stems, rinse twice, and cut into 4 cm lengths. Peel the luffa, rinse, and slice 1 cm thick.',
      'Soak dried shrimp in warm water for 10 minutes and rinse. Sauté shallot, then add shrimp until fragrant.',
      'Add 850 ml water and bring to a boil. Add luffa and cook 3–4 minutes until nearly tender.',
      'Add spinach, stir gently, and cook 2 minutes more, just until wilted.',
      'Season with fish sauce and salt; turn off heat to keep the greens bright.'
    ]),
    'soup-sour-fish':rec(['cá phi lê|fish fillet|g|250','cà chua|tomato|g|200','thơm|pineapple|g|150','đậu bắp|okra|g|100','giá đỗ|bean sprouts|g|80','me chua|tamarind|g|20','nước lọc|water|ml|1000','rau om|rice-paddy herb|g|10','ngò gai|sawtooth coriander|g|10','nước mắm|fish sauce|ml|15','tiêu đen|black pepper|g|1.5'],[
      'Cá kiểm tra xương, cắt miếng; rửa nhanh và thấm khô. Rửa cà chua bổ múi, thơm cắt lát, đậu bắp cắt xéo; rửa giá và rau om/ngò gai.',
      'Ngâm me với 100 ml nước nóng 10 phút, dằm và lọc bỏ hạt/xơ. Ướp cá với 5 ml nước mắm, tiêu 10 phút.',
      'Đun sôi 900 ml nước. Cho nước me, cà chua và thơm vào nấu 5 phút; hớt bọt và nêm nước mắm.',
      'Thả cá vào, nấu lửa vừa 4–5 phút. Thêm đậu bắp nấu 2 phút; cho giá vào cuối cùng 30 giây.',
      'Tắt bếp, rắc rau om và ngò gai. Nếm lại độ chua mặn; không khuấy mạnh sau khi cho cá.'
    ],[
      'Check fish for bones, cut into pieces, briefly rinse, and pat dry. Rinse and wedge tomatoes, slice pineapple, angle-cut okra, rinse sprouts and herbs.',
      'Soak tamarind in 100 ml hot water for 10 minutes, mash, and strain out seeds and fibers. Season fish with 5 ml fish sauce and pepper for 10 minutes.',
      'Bring 900 ml water to a boil. Add tamarind liquid, tomato, and pineapple; simmer 5 minutes, skim, and season with fish sauce.',
      'Add fish and cook over medium heat 4–5 minutes. Add okra for 2 minutes; add sprouts for the final 30 seconds.',
      'Turn off the heat and add rice-paddy herb and sawtooth coriander. Balance sour and salty flavors; avoid stirring the fish.'
    ]),
    'soup-sour-shrimp':rec(['tôm|shrimp|g|220','cà chua|tomato|g|200','thơm|pineapple|g|150','đậu bắp|okra|g|100','giá đỗ|bean sprouts|g|80','me chua|tamarind|g|20','nước lọc|water|ml|1000','rau om|rice-paddy herb|g|10','ngò gai|sawtooth coriander|g|10','nước mắm|fish sauce|ml|15','đường|sugar|g|5','tiêu đen|black pepper|g|1.5'],[
      'Bóc vỏ tôm, rút chỉ lưng, rửa nhanh và để ráo. Rửa cà chua bổ múi, thơm cắt lát, đậu bắp cắt xéo; rửa giá và rau thơm.',
      'Ngâm me với 100 ml nước nóng 10 phút, dằm rồi lọc. Ướp tôm với 5 ml nước mắm và tiêu 10 phút.',
      'Đun sôi 900 ml nước, cho nước me, cà chua, thơm vào nấu 5 phút. Nêm nước mắm và đường vừa chua dịu.',
      'Cho tôm vào nấu 2 phút đến chuyển hồng; thêm đậu bắp 2 phút và giá 30 giây.',
      'Tắt bếp, thêm rau om/ngò gai. Không nấu tôm quá lâu để tránh dai.'
    ],[
      'Peel and devein shrimp, rinse briefly, and drain. Rinse and wedge tomatoes, slice pineapple, angle-cut okra, and rinse sprouts and herbs.',
      'Soak tamarind in 100 ml hot water for 10 minutes, mash, and strain. Season shrimp with 5 ml fish sauce and pepper for 10 minutes.',
      'Bring 900 ml water to a boil. Add tamarind liquid, tomato, and pineapple; simmer 5 minutes. Season to a gentle sweet-sour taste.',
      'Add shrimp for 2 minutes until pink, then okra for 2 minutes and sprouts for 30 seconds.',
      'Turn off heat and add herbs. Do not overcook the shrimp or it will turn rubbery.'
    ]),
    'soup-bottle-gourd':rec(['bầu|bottle gourd|g|350','tôm|shrimp|g|180','hành tím|shallot|g|15','hành lá|spring onion|g|12','nước lọc|water|ml|850','nước mắm|fish sauce|ml|12','muối|salt|g|3','tiêu đen|black pepper|g|1.5'],[
      'Gọt vỏ bầu nếu vỏ dày, bổ dọc, dùng thìa nạo ruột già; rửa và thái sợi dày 5 mm. Bóc vỏ, rút chỉ tôm, băm thô.',
      'Ướp tôm với 6 ml nước mắm, tiêu và hành tím băm 10 phút trong tủ lạnh.',
      'Phi hành tím, cho tôm vào đảo đến vừa chuyển hồng. Đổ 850 ml nước và đun sôi, hớt bọt.',
      'Cho bầu vào nấu 4–6 phút đến trong nhẹ nhưng còn giữ hình.',
      'Nêm nước mắm, muối; rắc hành lá và tắt bếp.'
    ],[
      'Peel the gourd if the skin is thick, halve lengthwise, scoop out mature seeds, rinse, and cut into 5 mm strips. Peel and devein shrimp, then roughly chop.',
      'Season shrimp with 6 ml fish sauce, pepper, and minced shallot for 10 minutes in the refrigerator.',
      'Sauté shallot, add shrimp until just pink. Pour in 850 ml water, bring to a boil, and skim.',
      'Add gourd and cook 4–6 minutes until slightly translucent but still holding its shape.',
      'Season with fish sauce and salt, add scallions, and turn off the heat.'
    ]),
    'soup-potato':rec(['khoai tây|potato|g|250','cà rốt|carrot|g|150','thịt heo xay|ground pork|g|120','hành tím|shallot|g|15','nước lọc|water|ml|900','nước mắm|fish sauce|ml|12','hành lá|spring onion|g|12','tiêu đen|black pepper|g|1.5'],[
      'Gọt khoai tây và cà rốt, rửa sạch; cắt khối 2 cm. Ngâm khoai trong nước 5 phút rồi để ráo để bớt nhựa.',
      'Ướp thịt xay với nước mắm, tiêu và hành tím băm 10 phút trong tủ lạnh.',
      'Phi hành tím, cho thịt vào đảo tơi. Thêm nước, đun sôi và hớt bọt.',
      'Cho cà rốt vào nấu 5 phút, thêm khoai tây nấu 10–12 phút đến khi mềm nhưng không vỡ.',
      'Nêm lại, rắc hành lá. Dùng đũa xiên thử khoai để kiểm tra độ mềm.'
    ],[
      'Peel potatoes and carrot, rinse, and cut into 2 cm cubes. Soak potatoes in water 5 minutes and drain to remove surface starch.',
      'Season ground pork with fish sauce, pepper, and minced shallot for 10 minutes in the refrigerator.',
      'Sauté shallot, add pork and break it up. Add water, bring to a boil, and skim.',
      'Add carrot for 5 minutes, then potatoes for 10–12 minutes until tender but not falling apart.',
      'Adjust seasoning and add scallions. Pierce a potato cube to check tenderness.'
    ]),
    'soup-cabbage-pork':rec(['bắp cải|cabbage|g|300','thịt heo xay|ground pork|g|150','cà rốt|carrot|g|80','hành tím|shallot|g|15','nước lọc|water|ml|900','nước mắm|fish sauce|ml|12','hành lá|spring onion|g|12','tiêu đen|black pepper|g|1.5'],[
      'Bóc lá ngoài bắp cải, bổ làm tư, bỏ lõi cứng; rửa từng lớp lá rồi thái miếng 3 cm. Gọt cà rốt, thái lát mỏng.',
      'Ướp thịt với 7 ml nước mắm, tiêu và hành tím băm 10 phút trong tủ lạnh.',
      'Phi hành tím, cho thịt vào đảo tơi. Đổ nước, đun sôi và hớt bọt.',
      'Cho cà rốt vào nấu 3 phút, thêm bắp cải nấu 4–5 phút đến mềm vừa.',
      'Nêm nước mắm còn lại, rắc hành lá và tắt bếp.'
    ],[
      'Remove outer cabbage leaves, quarter the head, remove the tough core, rinse leaves between layers, and cut into 3 cm pieces. Peel and thinly slice carrot.',
      'Season pork with 7 ml fish sauce, pepper, and minced shallot for 10 minutes in the refrigerator.',
      'Sauté shallot, add pork and break it up. Add water, bring to a boil, and skim.',
      'Add carrot for 3 minutes, then cabbage for 4–5 minutes until just tender.',
      'Season with remaining fish sauce, add scallions, and turn off heat.'
    ]),
    'soup-tofu':rec(['đậu hũ non|soft tofu|hộp|2','rong biển khô|dried seaweed|g|12','nấm hương tươi|fresh shiitake mushrooms|g|80','hành lá|spring onion|g|12','nước lọc|water|ml|800','nước tương|soy sauce|ml|15','dầu mè|sesame oil|ml|5'],[
      'Ngâm rong biển theo hướng dẫn gói, thường 5 phút; xả nhanh và để ráo. Lau nấm bằng khăn ẩm, bỏ chân cứng và thái lát. Cắt đậu hũ miếng 2 cm.',
      'Đun 800 ml nước với nấm 5 phút để ra vị ngọt.',
      'Thêm rong biển và nước tương, nấu 2 phút. Thả đậu hũ nhẹ tay, đun lăn tăn 2–3 phút.',
      'Nếm lại nước dùng, thêm dầu mè và hành lá.',
      'Tắt bếp ngay khi đậu nóng; đun lâu làm rong biển nhũn.'
    ],[
      'Soak seaweed according to its package, usually 5 minutes; rinse briefly and drain. Wipe mushrooms with a damp cloth, trim tough stems, and slice. Cube tofu 2 cm.',
      'Simmer mushrooms in 800 ml water for 5 minutes to flavor the broth.',
      'Add seaweed and soy sauce for 2 minutes. Gently add tofu and simmer 2–3 minutes.',
      'Taste the broth, add sesame oil and scallions.',
      'Turn off the heat once tofu is hot; longer cooking makes seaweed mushy.'
    ]),
    'soup-mushroom-tofu':rec(['đậu hũ|tofu|bìa|2','nấm hương tươi|fresh shiitake mushrooms|g|120','nấm kim châm|enoki mushrooms|g|100','cà rốt|carrot|g|60','nước lọc|water|ml|850','nước tương|soy sauce|ml|15','muối|salt|g|2','hành lá|spring onion|g|12'],[
      'Lau nấm hương bằng khăn ẩm, bỏ chân cứng và thái lát. Cắt gốc nấm kim châm, tách cụm và rửa nhanh; cắt đậu hũ khối 2 cm, thái cà rốt lát mỏng.',
      'Đun nấm hương và cà rốt trong 850 ml nước 6 phút.',
      'Thêm nước tương và đậu hũ, nấu lăn tăn 3 phút. Cho nấm kim châm vào nấu thêm 1 phút.',
      'Nếm nước dùng; thêm chút muối nếu cần và rắc hành lá.',
      'Dùng nóng; không khuấy mạnh làm vỡ đậu hũ.'
    ],[
      'Wipe shiitakes with a damp cloth, trim tough stems, and slice. Trim enoki roots, separate clusters, and rinse quickly. Cube tofu 2 cm and thinly slice carrot.',
      'Simmer shiitake and carrot in 850 ml water for 6 minutes.',
      'Add soy sauce and tofu; simmer 3 minutes. Add enoki and cook 1 minute more.',
      'Taste the broth, add a little salt if needed, and finish with scallions.',
      'Serve hot and avoid stirring vigorously so the tofu stays intact.'
    ]),
    'soup-tomato-egg':rec(['cà chua|tomato|g|280','trứng gà|eggs|quả|2','hành tím|shallot|g|15','hành lá|spring onion|g|12','nước lọc|water|ml|850','nước mắm|fish sauce|ml|10','dầu ăn|cooking oil|ml|5','tiêu đen|black pepper|g|1.5'],[
      'Rửa cà chua, bổ múi nhỏ. Đập trứng ra chén, đánh tan với chút tiêu; băm hành tím, thái hành lá.',
      'Phi hành tím với dầu, cho cà chua vào xào 3 phút đến mềm. Dằm nhẹ một nửa để tạo màu nước.',
      'Đổ 850 ml nước, đun sôi 5 phút rồi nêm nước mắm.',
      'Khuấy nước thành vòng xoáy nhỏ, rót trứng thành dòng mảnh để tạo vân; không khuấy trong 30 giây.',
      'Rắc hành lá và tắt bếp khi trứng vừa đông.'
    ],[
      'Rinse and cut tomatoes into small wedges. Beat eggs with a little pepper; mince shallot and slice scallions.',
      'Sauté shallot in oil, add tomato, and cook 3 minutes until soft. Lightly mash half to color the broth.',
      'Add 850 ml water, boil 5 minutes, then season with fish sauce.',
      'Stir the broth into a small whirl and slowly pour in the egg to form ribbons; do not stir for 30 seconds.',
      'Add scallions and turn off heat as soon as the egg sets.'
    ]),
    'soup-daikon':rec(['củ cải trắng|daikon|g|300','thịt heo xay|ground pork|g|130','cà rốt|carrot|g|80','hành tím|shallot|g|15','nước lọc|water|ml|900','nước mắm|fish sauce|ml|12','hành lá|spring onion|g|12','tiêu đen|black pepper|g|1.5'],[
      'Gọt củ cải và cà rốt, rửa sạch; cắt miếng dày 1 cm. Băm hành tím, thái hành lá.',
      'Ướp thịt với 7 ml nước mắm, tiêu và hành tím 10 phút trong tủ lạnh.',
      'Phi hành, cho thịt vào đảo tơi. Đổ nước, đun sôi và hớt bọt.',
      'Cho cà rốt vào nấu 3 phút, thêm củ cải nấu 10–12 phút đến trong và mềm.',
      'Nêm phần nước mắm còn lại, thêm hành lá và tắt bếp.'
    ],[
      'Peel and rinse daikon and carrot; cut into 1 cm pieces. Mince shallot and slice scallions.',
      'Season pork with 7 ml fish sauce, pepper, and shallot for 10 minutes in the refrigerator.',
      'Sauté shallot, add pork and break it up. Add water, bring to a boil, and skim.',
      'Cook carrot for 3 minutes, add daikon, and simmer 10–12 minutes until translucent and tender.',
      'Season with remaining fish sauce, add scallions, and turn off the heat.'
    ]),
    'soup-amaranth':rec(['rau dền|amaranth greens|g|250','tôm|shrimp|g|150','hành tím|shallot|g|12','nước lọc|water|ml|850','nước mắm|fish sauce|ml|10','muối|salt|g|3','dầu ăn|cooking oil|ml|5','tiêu đen|black pepper|g|1.5'],[
      'Nhặt rau dền bỏ gốc cứng, lá già; rửa kỹ 2–3 lần vì lá dễ dính cát, cắt khúc 4 cm. Bóc vỏ và rút chỉ tôm.',
      'Băm thô tôm, ướp với 5 ml nước mắm và tiêu 10 phút.',
      'Phi hành tím, cho tôm vào đảo đến vừa hồng. Thêm 850 ml nước, đun sôi và hớt bọt.',
      'Cho rau dền vào, nấu 3–4 phút đến mềm; khuấy nhẹ để rau chìm đều.',
      'Nêm muối và nước mắm còn lại, tắt bếp khi rau vừa chín.'
    ],[
      'Pick amaranth greens, discard tough roots and old leaves, rinse carefully 2–3 times to remove grit, and cut into 4 cm lengths. Peel and devein shrimp.',
      'Roughly chop shrimp and season with 5 ml fish sauce and pepper for 10 minutes.',
      'Sauté shallot, add shrimp until just pink. Add 850 ml water, bring to a boil, and skim.',
      'Add greens and cook 3–4 minutes until tender, stirring gently so they submerge evenly.',
      'Season with salt and remaining fish sauce; turn off heat as soon as greens are done.'
    ]),
    'veg-morning-boil':rec(['rau muống|water spinach|g|350','muối|salt|g|5','nước lọc|water|ml|1500','nước mắm|fish sauce|ml|20','chanh|lime|quả|1','tỏi|garlic|g|5'],[
      'Nhặt bỏ lá vàng và cọng già. Rửa rau 2–3 lần, tách phần gốc dày; cắt khúc 8 cm và để ráo.',
      'Đun nồi lớn 1.5 lít nước với muối đến sôi mạnh. Cho phần cọng vào trước 30 giây.',
      'Thêm lá, dùng đũa nhấn rau ngập nước; luộc 2–3 phút từ lúc nước sôi lại để rau xanh giòn.',
      'Vớt rau ngay ra đĩa, không đậy nắp. Giữ nước luộc làm canh; vắt chanh vào sau khi đã múc ra tô.',
      'Pha nước chấm từ nước mắm, chanh, tỏi băm và chút nước ấm.'
    ],[
      'Discard yellow leaves and tough stems. Rinse 2–3 times, separate thick stems, cut into 8 cm lengths, and drain.',
      'Bring a large pot with 1.5 litres water and salt to a vigorous boil. Add thick stems 30 seconds first.',
      'Add leaves and submerge with chopsticks; boil 2–3 minutes from the return to boil for bright, crisp greens.',
      'Lift immediately to a plate and do not cover. Save the cooking water for soup; add lime only after pouring it into a bowl.',
      'Mix fish sauce, lime, minced garlic, and a little warm water for dipping.'
    ]),
    'veg-morning-garlic':rec(['rau muống|water spinach|g|350','tỏi|garlic|g|18','dầu ăn|cooking oil|ml|18','nước mắm|fish sauce|ml|10','muối|salt|g|2','nước lọc|water|ml|30'],[
      'Nhặt lá úa, bỏ cọng già; rửa rau 2–3 lần, cắt khúc 8 cm và để thật ráo. Băm tỏi, chia làm hai phần.',
      'Đun chảo thật nóng, cho dầu và một nửa tỏi vào phi 10 giây.',
      'Cho rau vào xào lửa lớn 1 phút; thêm 30 ml nước và muối, đảo nhanh 2 phút.',
      'Thêm nước mắm và tỏi còn lại, đảo thêm 30 giây đến khi rau vừa mềm giòn.',
      'Tắt bếp ngay, không đậy nắp để rau giữ màu xanh.'
    ],[
      'Remove wilted leaves and tough stems; rinse 2–3 times, cut into 8 cm lengths, and drain very well. Mince garlic and divide it in half.',
      'Heat a wok until hot, add oil and half the garlic, and sizzle 10 seconds.',
      'Add greens and stir-fry over high heat for 1 minute; add 30 ml water and salt, then toss quickly 2 minutes.',
      'Add fish sauce and remaining garlic; stir 30 seconds until crisp-tender.',
      'Turn off heat immediately and leave uncovered to keep the greens bright.'
    ]),
    'veg-bokchoy':rec(['cải thìa|bok choy|g|300','tỏi|garlic|g|15','dầu ăn|cooking oil|ml|15','dầu hào|oyster sauce|ml|10','nước lọc|water|ml|30','muối|salt|g|2'],[
      'Tách bẹ cải thìa, rửa kỹ chân bẹ nơi dễ bám đất. Chẻ bẹ to dọc đôi; để ráo. Băm tỏi.',
      'Khuấy dầu hào với 30 ml nước để sẵn. Làm nóng chảo, phi tỏi với dầu 10 giây.',
      'Cho phần bẹ trắng vào xào 1 phút, thêm lá xanh và đảo nhanh 1 phút.',
      'Rưới hỗn hợp dầu hào, đảo 1–2 phút đến khi bẹ vừa mềm nhưng lá còn xanh.',
      'Nếm muối, tắt bếp và dọn ngay.'
    ],[
      'Separate bok choy leaves and wash the base of each stalk carefully to remove grit. Halve large stalks lengthwise and drain. Mince garlic.',
      'Mix oyster sauce with 30 ml water. Heat the pan and sizzle garlic in oil for 10 seconds.',
      'Stir-fry white stalks for 1 minute, add green leaves, and toss another minute.',
      'Pour in the oyster-sauce mixture and cook 1–2 minutes until stalks are just tender and leaves remain green.',
      'Taste for salt, turn off heat, and serve immediately.'
    ]),
    'veg-mustard-boil':rec(['cải ngọt|choy sum|g|300','muối|salt|g|5','nước lọc|water|ml|1500','dầu ăn|cooking oil|ml|5','nước tương|soy sauce|ml|15'],[
      'Cắt bỏ gốc già, tách cọng và lá. Rửa kỹ từng bẹ 2–3 lần, ngâm nước sạch 5 phút nếu có cát rồi xả lại.',
      'Đun 1.5 lít nước với muối và vài giọt dầu đến sôi mạnh.',
      'Cho cọng vào trước 45 giây rồi thêm lá; luộc tổng cộng 2–3 phút đến khi xanh và vừa mềm.',
      'Vớt ra, để ráo. Dọn với nước tương đã chuẩn bị.',
      'Không đậy nắp sau khi vớt để hơi nóng không làm rau vàng.'
    ],[
      'Trim tough ends and separate stalks from leaves. Wash each section carefully 2–3 times; soak 5 minutes if gritty, then rinse again.',
      'Bring 1.5 litres water with salt and a few drops of oil to a vigorous boil.',
      'Add stalks for 45 seconds, then leaves; boil 2–3 minutes total until bright and just tender.',
      'Drain well and serve with the listed soy sauce.',
      'Do not cover after draining; trapped steam dulls the greens.'
    ]),
    'veg-cabbage':rec(['bắp cải|cabbage|g|350','muối|salt|g|5','nước lọc|water|ml|1500','nước mắm|fish sauce|ml|15','chanh|lime|quả|0.5','ớt đỏ|red chili|quả|1'],[
      'Bóc lá ngoài, bổ bắp cải làm tư và bỏ lõi cứng; rửa các lớp lá, cắt miếng lớn khoảng 5 cm.',
      'Đun 1.5 lít nước với muối đến sôi. Cho phần bẹ dày vào trước 1 phút.',
      'Thêm lá, nhấn ngập nước và luộc 3–4 phút đến khi vừa mềm; không luộc quá lâu.',
      'Vớt ra để ráo. Giữ nước luộc làm canh thanh.',
      'Pha nước chấm nước mắm, chanh và ớt thái lát; dọn rau ấm.'
    ],[
      'Remove outer leaves, quarter the cabbage, remove the tough core, rinse the layers, and cut into large 5 cm pieces.',
      'Bring 1.5 litres salted water to a boil. Add thick ribs for 1 minute first.',
      'Add leaves, submerge, and boil 3–4 minutes until just tender; do not overcook.',
      'Drain well and save the cooking water for a light soup.',
      'Mix fish sauce, lime, and sliced chili for dipping; serve the cabbage warm.'
    ]),
    'veg-cabbage-egg':rec(['bắp cải|cabbage|g|300','trứng gà|eggs|quả|2','tỏi|garlic|g|10','hành lá|spring onion|g|12','nước mắm|fish sauce|ml|10','dầu ăn|cooking oil|ml|15','nước lọc|water|ml|30'],[
      'Bóc lá ngoài, rửa bắp cải, bỏ lõi và thái sợi dày 5 mm. Băm tỏi, thái hành lá.',
      'Đập trứng, đánh với 5 ml nước mắm. Tráng trứng nhanh trong chảo dầu, xắn miếng rồi gắp ra.',
      'Phi tỏi, cho bắp cải vào xào 2 phút; thêm 30 ml nước và đậy 1 phút cho cải mềm nhẹ.',
      'Cho trứng trở lại, nêm phần nước mắm còn lại; đảo 1 phút để trứng nóng và cải chín tới.',
      'Rắc hành lá và tắt bếp khi bắp cải còn hơi giòn.'
    ],[
      'Remove outer cabbage leaves, rinse, remove the core, and shred into 5 mm strips. Mince garlic and slice scallions.',
      'Beat eggs with 5 ml fish sauce. Quickly scramble in a little oil, break into pieces, and remove.',
      'Sauté garlic, add cabbage for 2 minutes, then add 30 ml water and cover 1 minute to soften slightly.',
      'Return egg, add remaining fish sauce, and toss 1 minute until egg is hot and cabbage is just cooked.',
      'Finish with scallions and turn off heat while the cabbage still has a little crunch.'
    ]),
    'veg-beans':rec(['đậu que|green beans|g|300','tỏi|garlic|g|15','dầu ăn|cooking oil|ml|15','nước mắm|fish sauce|ml|10','nước lọc|water|ml|35','muối|salt|g|2'],[
      'Rửa đậu, cắt bỏ hai đầu và tước xơ dọc thân nếu có; cắt khúc 4–5 cm. Băm tỏi.',
      'Đun sôi nước, trụng đậu 2 phút rồi vớt vào nước mát; để ráo kỹ.',
      'Phi tỏi với dầu đến vàng nhạt. Cho đậu vào xào lửa lớn 2 phút.',
      'Thêm nước mắm và 35 ml nước, đậy nắp 2 phút để đậu chín.',
      'Mở nắp đảo đến khi cạn nước, nếm muối và tắt bếp khi đậu xanh giòn.'
    ],[
      'Rinse beans, trim both ends, remove strings if present, and cut into 4–5 cm lengths. Mince garlic.',
      'Blanch beans in boiling water for 2 minutes, cool briefly, and drain well.',
      'Sauté garlic in oil until pale gold. Add beans and stir-fry over high heat 2 minutes.',
      'Add fish sauce and 35 ml water, cover for 2 minutes to finish cooking.',
      'Uncover and toss until liquid evaporates. Season with salt and stop when beans are bright and crisp.'
    ]),
    'veg-chayote-boil':rec(['su su|chayote|g|350','muối|salt|g|5','nước lọc|water|ml|1500','nước mắm|fish sauce|ml|15','gừng|ginger|g|8'],[
      'Gọt vỏ su su; đeo găng nếu nhựa làm ngứa tay. Bổ đôi, bỏ hạt xơ, rửa sạch rồi thái lát dày 5 mm.',
      'Đun nước với muối đến sôi mạnh. Cho su su vào, đảo một lần để ngập nước.',
      'Luộc 5–7 phút đến khi vừa mềm nhưng còn giòn; xiên thử lát dày nhất.',
      'Vớt ra để ráo, giữ nước luộc làm canh.',
      'Pha nước mắm gừng: giã gừng, thêm nước mắm và chút nước ấm; dùng chấm.'
    ],[
      'Peel the chayote; wear gloves if its sap irritates your skin. Halve, remove fibrous seed, rinse, and slice 5 mm thick.',
      'Bring salted water to a vigorous boil. Add chayote and stir once to submerge.',
      'Boil 5–7 minutes until tender but still crisp; test the thickest slice with a fork.',
      'Drain and save the cooking water as soup.',
      'Pound ginger and mix with fish sauce and warm water for dipping.'
    ]),
    'veg-chayote-carrot':rec(['su su|chayote|g|250','cà rốt|carrot|g|120','tỏi|garlic|g|12','dầu ăn|cooking oil|ml|15','nước mắm|fish sauce|ml|10','nước lọc|water|ml|30'],[
      'Gọt su su, bổ đôi bỏ hạt xơ; rửa sạch và thái que mỏng. Gọt cà rốt, thái que tương tự để chín đều; băm tỏi.',
      'Đun chảo nóng, phi tỏi với dầu đến thơm.',
      'Cho cà rốt vào xào 2 phút trước; thêm su su và đảo lửa lớn 2 phút.',
      'Thêm nước mắm và 30 ml nước, đậy nắp 1 phút rồi mở ra đảo đến khi rau vừa mềm.',
      'Nếm lại, tắt bếp khi su su vẫn còn độ giòn.'
    ],[
      'Peel chayote, halve and remove the fibrous seed, rinse, and cut into thin matchsticks. Peel carrot and cut similarly for even cooking; mince garlic.',
      'Heat a pan and sauté garlic in oil until fragrant.',
      'Add carrot first for 2 minutes; add chayote and stir-fry over high heat 2 minutes.',
      'Add fish sauce and 30 ml water, cover 1 minute, then uncover and toss until just tender.',
      'Taste and turn off heat while the chayote remains slightly crisp.'
    ]),
    'veg-broccoli-boil':rec(['bông cải xanh|broccoli|g|300','muối|salt|g|5','nước lọc|water|ml|1500','dầu ăn|cooking oil|ml|5','nước tương|soy sauce|ml|15'],[
      'Cắt bỏ phần gốc già, tách bông cải thành nhánh đều cỡ 4 cm. Ngâm nước muối loãng 5 phút nếu có côn trùng, xả lại và để ráo.',
      'Đun 1.5 lít nước với muối và vài giọt dầu đến sôi mạnh.',
      'Cho bông cải vào luộc 2–3 phút; phần thân vừa xiên đũa được nhưng bông vẫn xanh.',
      'Vớt ra ngay, có thể nhúng nước mát 10 giây để giữ màu rồi để ráo.',
      'Dọn với nước tương đã chuẩn bị.'
    ],[
      'Trim the tough stem and divide broccoli into even 4 cm florets. Soak in lightly salted water for 5 minutes if needed, rinse, and drain.',
      'Bring 1.5 litres water with salt and a few drops of oil to a strong boil.',
      'Boil broccoli 2–3 minutes until the stems are just fork-tender and florets remain green.',
      'Remove immediately; briefly dip in cool water for 10 seconds to preserve color, then drain.',
      'Serve with the listed soy sauce.'
    ]),
    'veg-broccoli-garlic':rec(['bông cải xanh|broccoli|g|300','tỏi|garlic|g|15','dầu ăn|cooking oil|ml|15','dầu hào|oyster sauce|ml|10','nước lọc|water|ml|40'],[
      'Tách bông cải thành nhánh nhỏ, gọt sơ phần thân dày và thái lát; rửa kỹ các kẽ bông rồi để ráo. Băm tỏi.',
      'Trụng bông cải trong nước sôi 1 phút, vớt để ráo. Khuấy dầu hào với 40 ml nước.',
      'Phi tỏi với dầu đến thơm. Cho bông cải vào xào lửa lớn 1 phút.',
      'Rưới dầu hào pha loãng, đảo thêm 1–2 phút cho sốt phủ đều và thân vừa mềm.',
      'Tắt bếp khi rau còn xanh; nếm lại vì dầu hào đã mặn nên thường không cần thêm muối.'
    ],[
      'Separate broccoli into florets, peel the thick stem lightly and slice it; rinse between florets and drain. Mince garlic.',
      'Blanch broccoli in boiling water for 1 minute and drain. Mix oyster sauce with 40 ml water.',
      'Sauté garlic in oil until fragrant. Add broccoli and stir-fry over high heat 1 minute.',
      'Pour in diluted oyster sauce and toss 1–2 minutes until coated and stems are just tender.',
      'Turn off heat while broccoli is green; taste because oyster sauce is salty, so extra salt is usually unnecessary.'
    ]),
    'veg-mixed-boil':rec(['cà rốt|carrot|g|100','bông cải xanh|broccoli|g|150','đậu que|green beans|g|120','bắp non|baby corn|g|100','muối|salt|g|5','nước lọc|water|ml|1500','nước mắm|fish sauce|ml|15'],[
      'Rửa và gọt cà rốt, cắt khoanh 5 mm. Rửa bông cải tách nhánh; tước xơ đậu que và cắt đôi; rửa bắp non.',
      'Đun nước muối sôi. Cho cà rốt và bắp non vào luộc trước 3 phút.',
      'Thêm đậu que 1 phút rồi cho bông cải vào; luộc thêm 2–3 phút đến khi vừa chín.',
      'Vớt từng loại ra ngay khi mềm giòn; không để trong nồi nóng sau khi tắt bếp.',
      'Giữ nước luộc làm canh rau và dọn rau ngay khi còn nóng.'
    ],[
      'Rinse and peel carrot, cut into 5 mm coins. Rinse broccoli and separate florets; string and halve beans; rinse baby corn.',
      'Bring salted water to a boil. Add carrot and baby corn for 3 minutes first.',
      'Add beans for 1 minute, then broccoli; boil another 2–3 minutes until just tender.',
      'Lift out each vegetable as soon as crisp-tender; do not leave them in the hot pot.',
      'Serve the vegetables hot; save the cooking water as a light vegetable soup.'
    ]),
    'veg-cucumber-tomato':rec(['dưa leo|cucumber|g|200','cà chua|tomato|g|180','hành tây|onion|g|40','nước mắm|fish sauce|ml|12','đường|sugar|g|6','chanh|lime|quả|0.5','muối|salt|g|2'],[
      'Rửa dưa leo và cà chua dưới vòi nước. Cắt dưa leo lát 5 mm; cà chua bổ múi nhỏ. Thái hành tây thật mỏng.',
      'Rắc chút muối lên dưa leo, để 5 phút rồi chắt nước để salad không bị loãng.',
      'Khuấy nước mắm với đường và nước cốt chanh đến tan; nếm vị chua ngọt mặn nhẹ.',
      'Trộn dưa leo, cà chua và hành tây ngay trước khi ăn; rưới nước trộn từ từ.',
      'Để 3 phút cho thấm rồi dùng, không để lâu vì cà chua ra nước.'
    ],[
      'Rinse cucumber and tomatoes under running water. Slice cucumber 5 mm thick, wedge tomatoes, and thinly slice onion.',
      'Sprinkle cucumber with a little salt, rest 5 minutes, then drain so the salad does not get watery.',
      'Stir fish sauce with sugar and lime juice until dissolved; balance lightly sour, sweet, and salty.',
      'Combine cucumber, tomato, and onion just before serving; add dressing gradually.',
      'Rest 3 minutes to absorb flavor and serve; do not leave it long because tomatoes release liquid.'
    ]),
    'veg-sprout-chive':rec(['giá đỗ|bean sprouts|g|250','hẹ|garlic chives|g|80','tỏi|garlic|g|10','dầu ăn|cooking oil|ml|12','nước mắm|fish sauce|ml|10','muối|salt|g|2'],[
      'Nhặt bỏ vỏ đậu và rễ dài; rửa giá nhẹ tay 2 lần rồi để thật ráo. Rửa hẹ, cắt khúc 5 cm; băm tỏi.',
      'Phi tỏi với dầu ở lửa lớn 10 giây.',
      'Cho giá vào đảo nhanh 1 phút; nêm nước mắm và muối.',
      'Thêm hẹ, đảo thêm 30–45 giây đến khi hẹ vừa xẹp.',
      'Tắt bếp ngay để giá còn giòn và không ra nhiều nước.'
    ],[
      'Remove bean skins and long roots; gently rinse sprouts twice and drain very well. Rinse chives, cut into 5 cm lengths, and mince garlic.',
      'Sizzle garlic in oil over high heat for 10 seconds.',
      'Add sprouts and toss quickly for 1 minute; season with fish sauce and salt.',
      'Add chives and stir 30–45 seconds until just wilted.',
      'Turn off heat promptly so sprouts stay crisp and do not release excess water.'
    ]),
    'veg-mushroom-garlic':rec(['nấm đùi gà|king oyster mushrooms|g|250','tỏi|garlic|g|15','dầu ăn|cooking oil|ml|15','nước tương|soy sauce|ml|12','dầu hào|oyster sauce|ml|10','hành lá|spring onion|g|10','nước lọc|water|ml|15'],[
      'Cắt bỏ chân khô, lau nấm bằng khăn ẩm hoặc rửa thật nhanh rồi thấm khô. Thái lát dọc dày 5 mm; băm tỏi.',
      'Khuấy nước tương, dầu hào và 1 thìa canh nước.',
      'Làm nóng chảo, cho nấm vào áp chảo khô 2 phút để bay hơi nước; thêm dầu và tỏi.',
      'Xào 3–4 phút đến khi nấm vàng nhẹ, rưới sốt vào đảo đến khi áo đều.',
      'Rắc hành lá, tắt bếp. Nếm lại; dầu hào đã mặn nên thường không cần thêm muối.'
    ],[
      'Trim dry ends and wipe mushrooms with a damp cloth, or rinse very quickly and pat dry. Slice lengthwise 5 mm thick; mince garlic.',
      'Mix soy sauce, oyster sauce, and 1 tablespoon water.',
      'Heat the pan and dry-sear mushrooms for 2 minutes to release moisture; add oil and garlic.',
      'Stir-fry 3–4 minutes until lightly golden, pour in sauce, and toss to coat.',
      'Finish with scallions and turn off heat. Taste; oyster sauce is already salty, so extra salt is usually unnecessary.'
    ]),
    'meal-chicken-fried-rice':rec(['cơm nguội|cooked rice|g|400','thịt gà|chicken|g|180','trứng gà|eggs|quả|2','cà rốt|carrot|g|80','đậu que|green beans|g|80','tỏi|garlic|g|10','nước tương|soy sauce|ml|15','dầu ăn|cooking oil|ml|20','hành lá|spring onion|g|12','tiêu đen|black pepper|g|1.5'],[
      'Dùng cơm đã nấu trước, dàn nguội nhanh rồi cho vào tủ lạnh trong vòng 2 giờ; lấy ra bóp tơi. Gà cắt hạt lựu; cà rốt gọt vỏ cắt hạt lựu; đậu que rửa, tước xơ và cắt nhỏ.',
      'Ướp gà với 5 ml nước tương và tiêu 10 phút trong tủ lạnh. Đánh trứng riêng; băm tỏi, thái hành lá.',
      'Xào gà với nửa lượng dầu đến khi miếng dày nhất đạt 74°C, gắp ra. Thêm dầu, phi tỏi, xào cà rốt và đậu que 3 phút.',
      'Thêm cơm, dùng xẻng dàn và đảo đến nóng đều. Gạt cơm sang bên, cho trứng vào chỗ trống khuấy chín rồi trộn cùng.',
      'Cho gà trở lại, nêm nước tương còn lại, đảo lửa lớn 1 phút. Rắc hành lá và dùng nóng.'
    ],[
      'Use rice cooked ahead, cool it quickly, and refrigerate within 2 hours; fluff the chilled grains. Dice chicken; peel and dice carrot; rinse, string, and chop beans.',
      'Season chicken with 5 ml soy sauce and pepper for 10 minutes in the refrigerator. Beat eggs separately; mince garlic and slice scallions.',
      'Stir-fry chicken in half the oil until the thickest piece reaches 74°C, then remove. Add remaining oil, sauté garlic, then cook carrot and beans 3 minutes.',
      'Add rice and toss until evenly hot. Push it aside, scramble the egg in the open space, then mix together.',
      'Return chicken, add remaining soy sauce, and toss over high heat 1 minute. Finish with scallions and serve hot.'
    ]),
    'meal-chicken-pho':rec(['bánh phở tươi|fresh pho noodles|g|300','đùi gà|chicken thighs|g|350','hành tây|onion|củ|1','gừng|ginger|g|25','hoa hồi|star anise|cánh|2','quế|cinnamon|thanh|1','nước mắm|fish sauce|ml|20','muối|salt|g|3','hành lá|spring onion|g|20','rau mùi|cilantro|g|15'],[
      'Gà thấm khô. Bổ đôi hành tây và gừng; áp chảo mặt cắt khô đến xém thơm. Rang hoa hồi và quế 1 phút.',
      'Cho gà, hành, gừng, hồi, quế vào nồi với 1.2 lít nước. Đun sôi, hớt bọt rồi nấu lăn tăn khoảng 25 phút; đo phần dày nhất của gà đạt 74°C.',
      'Vớt gà ra khi đạt 74°C, để nguội rồi xé thịt. Lọc bỏ gia vị, nêm nước dùng với nước mắm và muối đã chuẩn bị.',
      'Trụng bánh phở theo hướng dẫn gói, xả nhanh nước nóng và chia vào tô. Xếp gà xé lên trên.',
      'Chan nước dùng đang sôi, thêm hành lá và rau mùi; kiểm tra gà đã đạt 74°C trước khi ăn.'
    ],[
      'Pat chicken dry. Halve onion and ginger; char the cut sides in a dry pan. Toast star anise and cinnamon for 1 minute.',
      'Put chicken, onion, ginger, star anise, and cinnamon in a pot with 1.2 litres water. Boil, skim, then gently simmer 25 minutes.',
      'Remove cooked chicken, cool, and shred. Strain out spices; season broth with fish sauce and salt.',
      'Blanch pho noodles according to the package, rinse briefly with hot water, and divide among bowls. Top with shredded chicken.',
      'Ladle over boiling-hot broth and add scallions and cilantro. Check the thickest part of the chicken reaches 74°C before serving.'
    ]),
    'meal-pork-macaroni':rec(['nui|macaroni|g|180','thịt heo xay|ground pork|g|180','cà rốt|carrot|g|100','khoai tây|potato|g|120','hành tím|shallot|g|15','nước lọc|water|ml|1100','nước mắm|fish sauce|ml|15','hành lá|spring onion|g|15','tiêu đen|black pepper|g|1.5'],[
      'Gọt cà rốt và khoai tây, rửa rồi cắt hạt lựu 1 cm. Băm hành tím, thái hành lá.',
      'Ướp thịt xay với 8 ml nước mắm và tiêu 10 phút trong tủ lạnh.',
      'Phi hành, cho thịt vào đảo tơi. Thêm nước và khoai tây, đun sôi rồi hớt bọt; nấu 5 phút.',
      'Cho cà rốt và nui khô vào, nấu theo thời gian trên gói (thường 8–10 phút), khuấy đáy nồi vài lần.',
      'Nêm nước mắm còn lại; nui mềm vừa thì tắt bếp, rắc hành lá và dùng ngay.'
    ],[
      'Peel and rinse carrot and potato, then dice into 1 cm cubes. Mince shallot and slice scallions.',
      'Season ground pork with 8 ml fish sauce and pepper for 10 minutes in the refrigerator.',
      'Sauté shallot, add pork and break it up. Add water and potato, bring to a boil, skim, and cook 5 minutes.',
      'Add carrot and dry macaroni; cook for the package time (usually 8–10 minutes), stirring the bottom a few times.',
      'Season with remaining fish sauce. Turn off heat when macaroni is just tender, add scallions, and serve promptly.'
    ]),
    'meal-hu-tieu-stirfry':rec(['hủ tiếu khô|dried rice noodles|g|250','thịt heo|pork|g|180','cải thìa|bok choy|g|120','giá đỗ|bean sprouts|g|100','tỏi|garlic|g|12','nước tương|soy sauce|ml|18','dầu hào|oyster sauce|ml|10','dầu ăn|cooking oil|ml|18','tiêu đen|black pepper|g|1.5','nước lọc|water|ml|30'],[
      'Ngâm hủ tiếu khô theo hướng dẫn gói đến mềm dẻo, xả nước và để ráo. Thái thịt mỏng; rửa cải thìa, cắt khúc; rửa giá.',
      'Ướp thịt với 8 ml nước tương, tiêu và dầu hào 15 phút trong tủ lạnh. Băm tỏi.',
      'Phi tỏi trong chảo nóng, xào thịt lửa lớn 2 phút đến vừa chín rồi gắp ra.',
      'Xào cải thìa 1 phút, cho hủ tiếu và 2 thìa canh nước vào đảo tơi; nêm nước tương còn lại.',
      'Cho giá và thịt trở lại, đảo nhanh 1 phút để nóng đều nhưng giá vẫn giòn; tắt bếp.'
    ],[
      'Soak dried rice noodles according to the package until pliable, rinse, and drain. Slice pork thinly; rinse and cut bok choy; rinse sprouts.',
      'Marinate pork with 8 ml soy sauce, pepper, and oyster sauce for 15 minutes in the refrigerator. Mince garlic.',
      'Sauté garlic in a hot wok and stir-fry pork over high heat 2 minutes until just cooked; remove.',
      'Stir-fry bok choy for 1 minute, add noodles and 2 tablespoons water, toss to loosen, and season with remaining soy sauce.',
      'Return sprouts and pork, toss 1 minute until hot while sprouts stay crisp, then turn off heat.'
    ]),
    'meal-egg-rice':rec(['cơm nguội|cooked rice|g|400','trứng gà|eggs|quả|3','hành lá|spring onion|g|20','tỏi|garlic|g|8','nước mắm|fish sauce|ml|12','dầu ăn|cooking oil|ml|20','tiêu trắng|white pepper|g|2'],[
      'Dùng cơm đã nấu trước, dàn nguội nhanh rồi cho vào tủ lạnh trong vòng 2 giờ; lấy ra bóp tơi. Đánh trứng với một nửa nước mắm và tiêu; thái hành lá, băm tỏi.',
      'Đun chảo thật nóng với dầu, phi tỏi 10 giây. Đổ trứng vào, khuấy thành miếng vừa chín.',
      'Cho cơm vào, dùng xẻng miết nhẹ và đảo trên lửa lớn 3–4 phút đến khi hạt cơm nóng tơi.',
      'Nêm nửa phần nước mắm còn lại, rắc hành lá và đảo thêm 20 giây.',
      'Tắt bếp khi cơm khô tơi; không thêm quá nhiều nước làm cơm nhão.'
    ],[
      'Use rice cooked ahead, cool it quickly, and refrigerate within 2 hours; break up the chilled grains. Beat eggs with half the fish sauce and pepper; slice scallions and mince garlic.',
      'Heat a wok until hot with oil and sizzle garlic 10 seconds. Add eggs and scramble until softly set.',
      'Add rice, gently press apart clumps, and toss over high heat 3–4 minutes until hot and fluffy.',
      'Season with the remaining fish sauce, add scallions, and stir 20 seconds more.',
      'Turn off heat when grains are dry and separate; excess water makes fried rice soggy.'
    ]),
    'meal-duong-chau-rice':rec(['cơm nguội|cooked rice|g|400','tôm|shrimp|g|120','trứng gà|eggs|quả|2','đậu que|green beans|g|80','cà rốt|carrot|g|60','lạp xưởng|Chinese sausage|g|60','tỏi|garlic|g|8','nước tương|soy sauce|ml|12','dầu ăn|cooking oil|ml|20'],[
      'Bóp tơi cơm lạnh. Rút chỉ tôm, rửa nhanh và thấm khô; cắt lạp xưởng hạt lựu. Rửa đậu que tước xơ, cà rốt gọt vỏ; cắt hạt lựu.',
      'Đánh trứng riêng. Xào lạp xưởng cho ra mỡ, thêm tôm xào đến hồng rồi gắp ra.',
      'Phi tỏi, xào cà rốt và đậu que 2–3 phút. Thêm cơm và đảo lửa lớn cho nóng tơi.',
      'Tạo khoảng trống giữa chảo, đổ trứng vào khuấy chín rồi trộn đều. Cho tôm và lạp xưởng trở lại.',
      'Nêm nước tương, đảo thêm 1 phút và dọn nóng.'
    ],[
      'Fluff cold rice. Devein shrimp, rinse briefly, and pat dry; dice Chinese sausage. Rinse and string beans, peel carrot, and dice both.',
      'Beat eggs separately. Render sausage in a pan, add shrimp until pink, then remove.',
      'Sauté garlic, cook carrot and beans 2–3 minutes, then add rice and toss over high heat until hot and fluffy.',
      'Make a space in the pan, scramble the egg there, and mix through. Return shrimp and sausage.',
      'Season with soy sauce, toss 1 minute more, and serve hot.'
    ]),
    'meal-shredded-chicken-rice':rec(['gạo|rice|g|300','đùi gà|chicken thighs|g|350','gừng|ginger|g|15','dưa leo|cucumber|g|150','xà lách|lettuce|g|100','hành lá|spring onion|g|15','nước mắm|fish sauce|ml|20','tỏi|garlic|g|8'],[
      'Vo gạo 2 lần, để ráo 10 phút. Gà thấm khô; gừng thái lát. Rửa dưa leo, xà lách và hành lá dưới vòi nước, để ráo.',
      'Nấu gà với gừng và 700 ml nước 20 phút; hớt bọt. Đo phần dày nhất đạt 74°C rồi vớt gà, lọc nước dùng.',
      'Dùng nước dùng nấu gạo trong nồi cơm điện (thêm vừa đến vạch cho 300 g gạo). Xé gà thành sợi khi nguội bớt.',
      'Pha nước mắm với tỏi băm và 2 thìa canh nước dùng. Thái dưa leo, xé xà lách.',
      'Xới cơm ra đĩa, xếp gà xé và rau bên cạnh; rưới ít nước mắm tỏi.'
    ],[
      'Rinse rice twice and drain 10 minutes. Pat chicken dry and slice ginger. Rinse cucumber, lettuce, and scallions under running water and drain.',
      'Simmer chicken with ginger in 700 ml water for 20 minutes, skimming foam. Check the thickest part reaches 74°C, then remove chicken and strain the broth.',
      'Cook rice in a rice cooker using the broth and water to the cooker mark for 300 g rice. Shred chicken when cool enough.',
      'Mix fish sauce with minced garlic and 2 tablespoons broth. Slice cucumber and tear lettuce.',
      'Plate rice with shredded chicken and vegetables; drizzle with garlic fish sauce.'
    ]),
    'meal-pork-congee':rec(['gạo tẻ|long-grain rice|g|140','thịt heo xay|ground pork|g|180','gừng|ginger|g|12','hành tím|shallot|g|15','nước lọc|water|ml|1600','nước mắm|fish sauce|ml|12','hành lá|spring onion|g|15','tiêu đen|black pepper|g|2'],[
      'Vo gạo 2 lần, để ráo. Có thể rang gạo khô 3 phút đến thơm để cháo nhanh nhừ và thơm hơn. Thái gừng sợi, băm hành tím.',
      'Ướp thịt với 7 ml nước mắm, tiêu và hành tím 10 phút trong tủ lạnh.',
      'Đun gạo với 1.6 lít nước, khuấy đáy nồi lúc đầu; sôi thì hạ lửa nhỏ, hé nắp và nấu 25–30 phút, khuấy mỗi 5 phút.',
      'Khi hạt gạo nở bung, cho thịt vào từng nhúm nhỏ, khuấy để không vón; nấu thêm 8 phút đến khi thịt chín.',
      'Nêm nước mắm còn lại, rắc gừng và hành lá. Thêm nước nóng nếu cháo đặc quá.'
    ],[
      'Rinse rice twice and drain. Optionally toast it dry for 3 minutes until fragrant for a nuttier, quicker-cooking congee. Julienne ginger and mince shallot.',
      'Season pork with 7 ml fish sauce, pepper, and shallot for 10 minutes in the refrigerator.',
      'Bring rice and 1.6 litres water to a boil, stirring the bottom at first. Lower heat, leave the lid ajar, and simmer 25–30 minutes, stirring every 5 minutes.',
      'When grains have opened, add pork in small pinches and stir to prevent clumps; cook 8 minutes until done.',
      'Season with remaining fish sauce, add ginger and scallions. Add hot water if the congee is too thick.'
    ]),
    'meal-chicken-congee':rec(['gạo tẻ|long-grain rice|g|140','đùi gà|chicken thighs|g|350','gừng|ginger|g|20','hành tím|shallot|g|15','nước lọc|water|ml|1700','nước mắm|fish sauce|ml|15','hành lá|spring onion|g|15','tiêu đen|black pepper|g|2'],[
      'Vo gạo, để ráo; rang khô 3 phút nếu thích cháo thơm. Gà thấm khô, gừng thái lát, hành tím đập dập.',
      'Cho gà, gừng, hành tím, gạo và 1.7 lít nước vào nồi. Đun sôi, hớt bọt rồi hạ lửa nhỏ.',
      'Nấu hé nắp 30–35 phút, khuấy đáy nồi định kỳ. Vớt gà khi chín, để nguội bớt rồi xé thịt.',
      'Cho thịt gà xé trở lại nồi, nấu 3 phút. Nêm nước mắm và tiêu; thêm nước nóng nếu cháo quá đặc.',
      'Rắc hành lá, gừng sợi; kiểm tra phần dày nhất của gà đạt 74°C trước khi dọn.'
    ],[
      'Rinse and drain rice; toast it dry for 3 minutes if you want a nuttier congee. Pat chicken dry, slice ginger, and crush shallot.',
      'Put chicken, ginger, shallot, rice, and 1.7 litres water in a pot. Bring to a boil, skim, then lower the heat.',
      'Simmer with the lid ajar for 30–35 minutes, stirring the bottom periodically. Remove cooked chicken, cool slightly, and shred.',
      'Return shredded chicken and cook 3 minutes. Season with fish sauce and pepper; add hot water if too thick.',
      'Finish with scallions and ginger. Check the thickest part of the chicken reaches 74°C before serving.'
    ]),
    'meal-chicken-glass-noodles':rec(['miến dong|glass noodles|g|180','thịt gà|chicken|g|300','nấm hương khô|dried shiitake mushrooms|g|100','mộc nhĩ khô|dried wood ear mushrooms|g|8','hành tím|shallot|g|15','nước lọc|water|ml|1000','nước mắm|fish sauce|ml|15','hành lá|spring onion|g|15','tiêu đen|black pepper|g|1.5'],[
      'Ngâm miến trong nước mát 10 phút rồi cắt đôi. Ngâm nấm hương và mộc nhĩ khô trong nước ấm 15 phút; rửa sạch, bỏ chân và thái sợi.',
      'Gà chặt miếng vừa, thấm khô và ướp với 7 ml nước mắm, tiêu 10 phút.',
      'Phi hành tím, cho gà vào đảo săn. Thêm 1 lít nước, đun sôi và hớt bọt; nấu 15–18 phút, kiểm tra phần dày nhất đạt 74°C.',
      'Cho nấm vào nấu 5 phút. Thêm miến đã ngâm, nấu 2–3 phút theo độ dai mong muốn.',
      'Nêm nước mắm còn lại, rắc hành lá và dùng ngay để miến không hút cạn nước.'
    ],[
      'Soak glass noodles in cool water for 10 minutes and cut in half. Soak dried shiitake and wood ear mushrooms in warm water 15 minutes; rinse, trim, and slice.',
      'Cut chicken into pieces, pat dry, and season with 7 ml fish sauce and pepper for 10 minutes.',
      'Sauté shallot, brown the chicken, add 1 litre water, bring to a boil, and skim; simmer 15–18 minutes and check the thickest piece reaches 74°C.',
      'Add mushrooms for 5 minutes. Add soaked noodles and cook 2–3 minutes to the desired texture.',
      'Season with remaining fish sauce, add scallions, and serve promptly so noodles do not absorb all the broth.'
    ]),
    'meal-grilled-pork-vermicelli':rec(['thịt heo|pork shoulder|g|350','bún tươi|fresh rice vermicelli|g|300','sả|lemongrass|cây|2','tỏi|garlic|g|12','nước mắm|fish sauce|ml|30','đường|sugar|g|14','dưa leo|cucumber|g|120','xà lách|lettuce|g|100','húng lủi|spearmint|g|15','rau quế|Thai basil|g|15','chanh|lime|quả|1','tiêu đen|black pepper|g|1.5','nước lọc|water|ml|60'],[
      'Thái thịt ngang thớ thành lát 5 mm. Băm sả non và tỏi. Rửa dưa leo, xà lách, húng lủi và rau quế; để ráo.',
      'Ướp thịt với sả, tỏi, 10 ml nước mắm, 8 g đường và tiêu ít nhất 30 phút trong tủ lạnh.',
      'Pha nước chấm: dùng phần nước mắm còn lại, 6 g đường, nước cốt chanh và 60 ml nước ấm; khuấy tan.',
      'Nướng thịt trên vỉ hoặc áp chảo từng mẻ lửa vừa-cao 2–3 phút mỗi mặt đến chín vàng; không chồng thịt.',
      'Trụng bún theo hướng dẫn, xếp xà lách, húng lủi, rau quế và dưa leo vào tô, thêm thịt nóng và rưới nước chấm.'
    ],[
      'Slice pork across the grain 5 mm thick. Mince tender lemongrass and garlic. Rinse cucumber, lettuce, spearmint, and Thai basil, then drain.',
      'Marinate pork with lemongrass, garlic, 10 ml fish sauce, 8 g sugar, and pepper for at least 30 minutes in the refrigerator.',
      'Mix remaining fish sauce with 6 g sugar, lime juice, and 60 ml warm water for the dressing.',
      'Grill or pan-sear pork in batches over medium-high heat 2–3 minutes per side until the thickest part reaches 63°C; rest 3 minutes and do not crowd the pan.',
      'Blanch vermicelli as directed, arrange lettuce, spearmint, Thai basil, and cucumber in bowls, top with hot pork, and add dressing.'
    ]),
    'meal-pork-meatball-noodle':rec(['bún tươi|fresh rice vermicelli|g|300','thịt heo xay|ground pork|g|250','nấm mèo|wood ear mushrooms|g|8','hành tím|shallot|g|15','nước lọc|water|ml|1100','củ cải trắng|daikon|g|120','nước mắm|fish sauce|ml|18','hành lá|spring onion|g|15','tiêu đen|black pepper|g|1.5'],[
      'Ngâm nấm mèo khô nước ấm 15 phút, rửa và băm nhỏ. Băm hành tím; gọt củ cải, thái khoanh.',
      'Trộn thịt với nấm, hành tím, 8 ml nước mắm và tiêu; quết 1 phút cho dẻo rồi để lạnh 15 phút.',
      'Đun củ cải với 1.1 lít nước 10 phút. Tay ướt, vo thịt thành viên 3 cm và thả vào nồi.',
      'Nấu lăn tăn 10–12 phút; viên chín sẽ nổi và phần giữa không còn hồng. Hớt bọt, nêm nước mắm.',
      'Trụng bún, chia tô, chan nước dùng và mọc; thêm hành lá.'
    ],[
      'Soak dried wood ear mushrooms in warm water for 15 minutes, rinse, and mince. Mince shallot; peel and slice daikon.',
      'Mix pork with mushrooms, shallot, 8 ml fish sauce, and pepper. Knead 1 minute until tacky, then chill 15 minutes.',
      'Simmer daikon in 1.1 litres water for 10 minutes. With wet hands, shape pork into 3 cm balls and drop into the pot.',
      'Simmer 10–12 minutes; meatballs float and should be cooked through with no pink center. Skim and season with fish sauce.',
      'Blanch vermicelli, divide into bowls, ladle over broth and meatballs, and add scallions.'
    ]),
    'meal-beef-noodles':rec(['mì trứng|egg noodles|g|250','thịt bò|beef|g|250','cải thìa|bok choy|g|150','hành tây|onion|củ|1','tỏi|garlic|g|12','nước tương|soy sauce|ml|18','dầu hào|oyster sauce|ml|10','bột bắp|cornstarch|g|5','dầu ăn|cooking oil|ml|18','tiêu đen|black pepper|g|1.5','nước lọc|water|ml|30'],[
      'Thái bò ngang thớ thật mỏng. Rửa cải thìa, tách bẹ và cắt khúc; bóc hành tây cắt lát; băm tỏi.',
      'Ướp bò với 8 ml nước tương, dầu hào, bột bắp và tiêu 15 phút trong tủ lạnh.',
      'Luộc mì theo gói đến vừa mềm, xả nhanh nước mát và để ráo. Xào bò trên chảo nóng 1 phút, gắp ra.',
      'Phi tỏi, xào hành tây và cải thìa 2 phút. Thêm mì, phần nước tương còn lại và 2 thìa canh nước; đảo tơi.',
      'Cho bò trở lại đảo 30–45 giây đến nóng đều; tắt bếp khi bò vừa chín.'
    ],[
      'Slice beef very thinly across the grain. Rinse bok choy, separate stalks and cut; slice onion and mince garlic.',
      'Marinate beef with 8 ml soy sauce, oyster sauce, cornstarch, and pepper for 15 minutes in the refrigerator.',
      'Boil noodles according to the package until just tender, rinse briefly in cool water, and drain. Sear beef in a hot pan 1 minute and remove.',
      'Sauté garlic, stir-fry onion and bok choy for 2 minutes. Add noodles, remaining soy sauce, and 2 tablespoons water; toss.',
      'Return beef and toss 30–45 seconds until hot; turn off heat as soon as beef is cooked.'
    ]),
    'meal-pork-banh-canh':rec(['bánh canh|thick rice noodles|g|300','thịt heo xay|ground pork|g|200','cà rốt|carrot|g|100','hành tím|shallot|g|15','nước lọc|water|ml|1100','nước mắm|fish sauce|ml|18','bột bắp|cornstarch|g|6','hành lá|spring onion|g|15','tiêu đen|black pepper|g|1.5'],[
      'Nếu bánh canh khô, ngâm theo hướng dẫn gói; bánh tươi rửa nhanh và để ráo. Gọt cà rốt thái lát; băm hành tím.',
      'Ướp thịt với 8 ml nước mắm, tiêu và hành tím 10 phút trong tủ lạnh.',
      'Phi hành, cho thịt vào xào tơi. Thêm nước và cà rốt, đun sôi rồi hớt bọt; nấu 8 phút.',
      'Cho bánh canh vào nấu theo gói (thường 5–8 phút) đến mềm dai. Hòa bột bắp với 2 thìa canh nước rồi rót từ từ nếu muốn nước hơi sánh.',
      'Nêm nước mắm còn lại, rắc hành lá và tắt bếp.'
    ],[
      'If using dried noodles, soak as directed; briefly rinse fresh noodles and drain. Peel and slice carrot; mince shallot.',
      'Season pork with 8 ml fish sauce, pepper, and shallot for 10 minutes in the refrigerator.',
      'Sauté shallot, add pork and break it up. Add water and carrot, bring to a boil, skim, and cook 8 minutes.',
      'Add noodles and cook according to the package (usually 5–8 minutes) until chewy. Mix cornstarch with 2 tablespoons water and drizzle in if you want a slightly thick broth.',
      'Season with remaining fish sauce, add scallions, and turn off the heat.'
    ]),
    'meal-fishcake-noodle':rec(['bún tươi|fresh rice vermicelli|g|300','chả cá|fish cake|g|250','cà chua|tomato|g|200','thơm|pineapple|g|100','thì là|dill|g|15','hành tím|shallot|g|15','nước lọc|water|ml|1000','nước mắm|fish sauce|ml|18'],[
      'Rửa cà chua, bổ múi; thơm gọt vỏ, bỏ mắt và thái lát. Rửa thì là để ráo, cắt khúc. Chả cá thái lát dày 1 cm.',
      'Phi hành tím, cho cà chua và thơm vào xào 3 phút để ra màu và mùi thơm.',
      'Thêm 1 lít nước, đun sôi nhẹ 10 phút. Cho chả cá vào nấu 4–5 phút đến nóng và thấm.',
      'Nêm nước mắm, thêm thì là và tắt bếp sau 30 giây.',
      'Trụng bún, chia tô và chan nước dùng nóng cùng chả cá, cà chua, thơm.'
    ],[
      'Rinse and wedge tomatoes; peel pineapple, remove eyes, and slice. Rinse and drain dill, then cut into lengths. Slice fish cake 1 cm thick.',
      'Sauté shallot, add tomato and pineapple, and cook 3 minutes to release color and aroma.',
      'Add 1 litre water and gently simmer 10 minutes. Add fish cake for 4–5 minutes until hot and flavorful.',
      'Season with fish sauce, add dill, and turn off the heat after 30 seconds.',
      'Blanch vermicelli, divide into bowls, and ladle over hot broth with fish cake, tomato, and pineapple.'
    ]),
    'beef-potato':rec(['thịt bò|beef|g|300','khoai tây|potato|g|250','hành tây|onion|g|80','tỏi|garlic|g|12','nước tương|soy sauce|ml|12','dầu ăn|cooking oil|ml|20','bột bắp|cornstarch|g|5','nước lọc|water|ml|30','tiêu đen|black pepper|g|1.5'],[
      'Thái bò ngang thớ thành lát mỏng. Ướp với 8 ml nước tương, bột bắp và tiêu; đậy kín, để tủ lạnh 15 phút. Gọt khoai, thái lát 4 mm, rửa bớt tinh bột rồi thấm khô.',
      'Làm nóng chảo với nửa lượng dầu. Xào khoai trên lửa vừa 6–8 phút, đảo đều đến khi vàng nhẹ và gần mềm; thêm 30 ml nước, đậy nắp 2 phút nếu cần.',
      'Cho hành tây vào đảo 2 phút. Gạt rau củ ra mép chảo, thêm phần dầu còn lại rồi xào bò nhanh thành từng mẻ đến khi phần dày nhất đạt 63°C.',
      'Trộn bò với rau củ, thêm phần nước tương còn lại và đảo 30 giây. Để thịt nghỉ 3 phút rồi dọn nóng với cơm.'
    ],[
      'Slice beef thinly across the grain. Marinate with 8 ml soy sauce, cornstarch, and pepper; cover and refrigerate 15 minutes. Peel potatoes, slice 4 mm thick, rinse off excess starch, and pat dry.',
      'Heat half the oil in a pan. Stir-fry potatoes over medium heat for 6–8 minutes until lightly golden and nearly tender; add 30 ml water and cover for 2 minutes if needed.',
      'Add onion and cook 2 minutes. Push vegetables aside, add remaining oil, and stir-fry beef in batches until the thickest piece reaches 63°C.',
      'Toss beef with vegetables, add remaining soy sauce, and stir 30 seconds. Rest the beef 3 minutes and serve hot with rice.'
    ]),
    'beef-broccoli':rec(['thịt bò|beef|g|300','bông cải xanh|broccoli|g|250','tỏi|garlic|g|12','dầu hào|oyster sauce|ml|12','nước tương|soy sauce|ml|8','dầu ăn|cooking oil|ml|15','bột bắp|cornstarch|g|5','nước lọc|water|ml|60','tiêu đen|black pepper|g|1.5'],[
      'Thái bò ngang thớ thật mỏng. Ướp với dầu hào, nước tương, bột bắp và tiêu; đậy kín, để tủ lạnh 15 phút. Tách bông cải nhánh vừa ăn, gọt sơ thân dày và rửa kỹ kẽ bông.',
      'Trụng bông cải trong nước sôi 1 phút, vớt để ráo. Hòa 60 ml nước với dầu hào và nước tương trong phần nguyên liệu.',
      'Làm nóng chảo với dầu. Xào bò nhanh theo từng mẻ đến khi phần dày nhất đạt 63°C; gắp ra đĩa và để nghỉ 3 phút.',
      'Phi tỏi 10 giây, cho bông cải vào đảo 1–2 phút. Rót phần sốt đã pha, đảo đến khi áo đều; cho bò trở lại trộn nóng rồi dọn.'
    ],[
      'Slice beef very thinly across the grain. Marinate with oyster sauce, soy sauce, cornstarch, and pepper; cover and refrigerate 15 minutes. Divide broccoli into bite-size florets, peel the thick stem lightly, and rinse between florets.',
      'Blanch broccoli in boiling water for 1 minute and drain. Mix 60 ml water with the listed oyster and soy sauces.',
      'Heat oil in a wok. Stir-fry beef in batches until the thickest piece reaches 63°C; transfer to a plate and rest 3 minutes.',
      'Sizzle garlic for 10 seconds, add broccoli, and toss 1–2 minutes. Pour in the sauce and coat evenly; return beef, toss until hot, and serve.'
    ]),
    'pork-sweet-sour':rec(['thịt heo|pork loin|g|350','ớt chuông|bell pepper|g|120','thơm|pineapple|g|120','hành tây|onion|g|80','tỏi|garlic|g|12','giấm gạo|rice vinegar|ml|20','nước mắm|fish sauce|ml|15','đường|sugar|g|18','dầu ăn|cooking oil|ml|18','bột bắp|cornstarch|g|8','nước lọc|water|ml|45','tiêu đen|black pepper|g|1.5'],[
      'Thái thịt heo thành miếng mỏng vừa ăn. Ướp với 5 ml nước mắm, tiêu và một nửa bột bắp; đậy kín, để tủ lạnh 15 phút. Cắt ớt chuông, hành tây và thơm miếng vừa ăn.',
      'Khuấy giấm, phần nước mắm còn lại, đường, phần bột bắp còn lại và 45 ml nước thành sốt. Phi tỏi với dầu đến thơm.',
      'Xào thịt trên lửa lớn thành từng mẻ đến khi phần dày nhất đạt 63°C; gắp ra để nghỉ 3 phút. Xào ớt chuông, hành tây và thơm 3–4 phút cho vừa mềm.',
      'Đổ sốt vào chảo, đảo đến khi sánh trong. Cho thịt trở lại, đảo áo sốt 30–60 giây rồi dọn.'
    ],[
      'Slice pork into thin bite-size strips. Marinate with 5 ml fish sauce, pepper, and half the cornstarch; cover and refrigerate 15 minutes. Cut bell pepper, onion, and pineapple into bite-size pieces.',
      'Mix vinegar, remaining fish sauce, sugar, remaining cornstarch, and 45 ml water into a sauce. Sizzle garlic in oil until fragrant.',
      'Stir-fry pork in batches over high heat until the thickest piece reaches 63°C; transfer to a plate and rest 3 minutes. Stir-fry pepper, onion, and pineapple for 3–4 minutes until just tender.',
      'Pour sauce into the pan and stir until clear and glossy. Return pork, toss for 30–60 seconds, and serve.'
    ]),
    'pork-pickled-mustard':rec(['thịt heo|pork shoulder|g|300','dưa cải chua|pickled mustard greens|g|250','cà chua|tomato|g|150','tỏi|garlic|g|12','hành tím|shallot|g|15','nước mắm|fish sauce|ml|12','đường|sugar|g|5','dầu ăn|cooking oil|ml|15','nước lọc|water|ml|30','tiêu đen|black pepper|g|1.5'],[
      'Thái thịt heo thành lát mỏng ngang thớ. Ướp với 6 ml nước mắm và tiêu; đậy kín, để tủ lạnh 15 phút. Nếm dưa cải; nếu mặn, xả nhanh một lần rồi vắt ráo. Cắt khúc 3 cm; thái cà chua múi cau.',
      'Phi hành tím và tỏi với dầu. Cho thịt vào xào đến khi phần dày nhất đạt 63°C; gắp ra để nghỉ 3 phút.',
      'Cho cà chua vào chảo đảo 2 phút, thêm dưa cải và 30 ml nước; xào 4–5 phút để dưa nóng mềm và bớt chua gắt.',
      'Cho thịt trở lại, thêm phần nước mắm còn lại và đường. Đảo 1 phút, nếm rồi mới thêm nước mắm nếu dưa cải còn mặn.'
    ],[
      'Slice pork thinly across the grain. Season with 6 ml fish sauce and pepper; cover and refrigerate 15 minutes. Taste the pickled greens; if very salty, rinse once and squeeze dry. Cut into 3 cm lengths and wedge the tomato.',
      'Sizzle shallot and garlic in oil. Stir-fry pork until the thickest piece reaches 63°C; transfer to a plate and rest 3 minutes.',
      'Add tomato and cook 2 minutes, then add mustard greens and 30 ml water. Stir-fry 4–5 minutes until hot and mellow.',
      'Return pork, add remaining fish sauce and sugar, and toss 1 minute. Taste before adding more fish sauce because the pickles may be salty.'
    ]),
    'fish-claypot':rec(['cá lóc|snakehead fish|g|500','nước dừa tươi|fresh coconut water|ml|180','hành tím|shallot|g|25','tỏi|garlic|g|10','nước mắm|fish sauce|ml|22','đường|sugar|g|16','tiêu đen|black pepper|g|3','ớt đỏ|red chili|quả|1','dầu ăn|cooking oil|ml|10','nước lọc|water|ml|5'],[
      'Cá làm sạch vảy, bỏ mang và ruột, cắt khúc dày 3–4 cm; thấm khô. Ướp với nước mắm, tiêu, hành tím và tỏi băm 15 phút trong tủ lạnh.',
      'Thắng đường trong nồi đất hoặc nồi đáy dày với 1 thìa cà phê nước đến màu cánh gián. Thêm dầu, cho cá vào áp chảo nhẹ từng mặt 1 phút.',
      'Rót nước dừa quanh cá, đun sôi rồi hạ lửa nhỏ. Kho hé nắp 25–30 phút; không đảo, chỉ lắc nồi nhẹ để sốt phủ cá.',
      'Khi phần dày nhất của cá đạt 63°C và nước kho sánh, thêm ớt, nếm lại rồi tắt bếp.'
    ],[
      'Scale the snakehead, remove gills and innards, cut into 3–4 cm steaks, and pat dry. Marinate with fish sauce, pepper, minced shallot, and garlic for 15 minutes in the refrigerator.',
      'Caramelize the sugar in a clay pot or heavy saucepan with 1 teaspoon water until amber. Add oil and gently sear each side of the fish for 1 minute.',
      'Pour coconut water around the fish, bring to a boil, then lower the heat. Partly cover and braise 25–30 minutes; do not stir, just gently shake the pot.',
      'When the thickest part reaches 63°C and the sauce is glossy, add chili, taste, and turn off the heat.'
    ]),
    'mackerel-pineapple':rec(['cá nục|round scad mackerel|g|500','thơm|pineapple|g|200','cà chua|tomato|g|150','hành tím|shallot|g|20','tỏi|garlic|g|10','nước mắm|fish sauce|ml|22','đường|sugar|g|10','nước lọc|water|ml|180','dầu ăn|cooking oil|ml|10','tiêu đen|black pepper|g|2'],[
      'Cá nục bỏ mang và ruột, rửa nhanh, thấm khô; khứa nhẹ hai bên. Ướp với 8 ml nước mắm, tiêu và hành tím 15 phút trong tủ lạnh. Thơm gọt bỏ mắt, thái miếng; cà chua bổ múi.',
      'Áp chảo cá với dầu 2 phút mỗi mặt cho săn, gắp ra. Phi tỏi, xào cà chua 2 phút rồi thêm thơm.',
      'Thêm nước, đường và phần nước mắm còn lại. Đun sôi nhẹ, xếp cá trở lại chảo, đậy hé nắp và kho 18–22 phút.',
      'Rưới sốt lên cá vài lần; nấu đến khi cá chín đục, dễ tách lớp và phần dày nhất đạt 63°C. Nếm lại rồi dọn.'
    ],[
      'Remove the gills and innards from the mackerel, rinse briefly, pat dry, and score both sides. Marinate with 8 ml fish sauce, pepper, and shallot for 15 minutes in the refrigerator. Peel and cut pineapple; wedge the tomato.',
      'Pan-sear fish in oil for 2 minutes per side until set, then remove. Sauté garlic, cook tomato 2 minutes, and add pineapple.',
      'Add water, sugar, and remaining fish sauce. Bring to a gentle simmer, return fish, partly cover, and braise 18–22 minutes.',
      'Spoon sauce over the fish a few times; cook until opaque and flaky and the thickest part reaches 63°C. Taste and serve.'
    ]),
    'ribs-savory-glaze':rec(['sườn non|pork ribs|g|500','hành tím|shallot|g|20','tỏi|garlic|g|12','nước mắm|fish sauce|ml|22','đường|sugar|g|18','tiêu đen|black pepper|g|2','dầu ăn|cooking oil|ml|12','nước lọc|water|ml|250'],[
      'Chặt sườn miếng 4 cm. Trụng nước sôi 2 phút, đổ bỏ nước, rửa sạch nồi và thấm sườn khô. Ướp sườn với 10 ml nước mắm, tiêu, hành tím và tỏi băm 15 phút trong tủ lạnh.',
      'Áp chảo sườn với dầu 6–8 phút cho vàng các mặt. Thêm 200 ml nước, đậy nắp và om lửa nhỏ 30 phút; châm thêm nước nóng nếu cạn.',
      'Mở nắp, thêm đường và phần nước mắm còn lại. Rim 8–10 phút, trở sườn vài lần đến khi mềm và nước sốt sánh bám quanh miếng.',
      'Kiểm tra sườn mềm tới xương, nếm lại vị mặn ngọt rồi dọn nóng.'
    ],[
      'Cut ribs into 4 cm pieces. Blanch in boiling water 2 minutes, discard the water, clean the pot, and pat the ribs dry. Marinate with 10 ml fish sauce, pepper, minced shallot, and garlic for 15 minutes in the refrigerator.',
      'Brown ribs in oil for 6–8 minutes. Add 200 ml water, cover, and braise gently for 30 minutes; add hot water if the pan dries out.',
      'Uncover, add sugar and remaining fish sauce, and reduce 8–10 minutes, turning the ribs until tender and glazed.',
      'Check that the ribs are tender to the bone, balance the salty-sweet flavor, and serve hot.'
    ]),
    'squid-pineapple':rec(['mực ống|squid|g|350','thơm|pineapple|g|200','cà chua|tomato|g|150','cần tây|celery|g|60','tỏi|garlic|g|12','nước mắm|fish sauce|ml|15','đường|sugar|g|4','dầu ăn|cooking oil|ml|15'],[
      'Kéo bỏ mai trong suốt và túi mực; bỏ mắt, răng và da tím nếu muốn. Rửa nhanh phần thân và râu, thấm thật khô; khứa caro mặt trong rồi cắt miếng 4 cm.',
      'Gọt thơm bỏ mắt, thái miếng; cà chua bổ múi, cần tây cắt đoạn 4 cm. Làm nóng chảo thật lớn với dầu, phi tỏi 10 giây.',
      'Xào mực thành từng mẻ 1–2 phút đến khi chuyển trắng đục và vừa săn; gắp ra ngay để không dai.',
      'Xào thơm và cà chua 2 phút, thêm cần tây, nước mắm và đường; đảo 1–2 phút. Cho mực trở lại trộn nóng 30 giây rồi dọn.'
    ],[
      'Pull out the clear quill and ink sac; remove eyes, beak, and purple skin if desired. Rinse body and tentacles briefly, pat very dry, score the inside, and cut into 4 cm pieces.',
      'Peel and remove pineapple eyes, cut into pieces; wedge tomato and cut celery into 4 cm lengths. Heat a large pan with oil and sizzle garlic for 10 seconds.',
      'Stir-fry squid in batches for 1–2 minutes until opaque and just firm; remove promptly to keep it tender.',
      'Stir-fry pineapple and tomato 2 minutes, add celery, fish sauce, and sugar, and toss 1–2 minutes. Return squid, toss 30 seconds until hot, and serve.'
    ]),
    'squid-celery':rec(['mực ống|squid|g|350','cần tây|celery|g|150','hành tây|onion|g|80','cà chua|tomato|g|120','tỏi|garlic|g|12','dầu hào|oyster sauce|ml|12','nước mắm|fish sauce|ml|8','dầu ăn|cooking oil|ml|15','tiêu đen|black pepper|g|1.5','nước lọc|water|ml|30'],[
      'Sơ chế mực: bỏ mai, túi mực, mắt và răng; rửa nhanh, thấm khô, khứa caro mặt trong rồi cắt khoanh 1 cm. Cắt cần tây đoạn 4 cm, hành tây múi cau và cà chua múi nhỏ.',
      'Hòa dầu hào với nước mắm và 2 thìa canh nước. Làm nóng chảo với dầu, phi tỏi đến thơm.',
      'Xào mực lửa lớn 1–2 phút đến trắng đục; gắp ra ngay. Cho hành tây và cà chua vào xào 2 phút.',
      'Thêm cần tây và sốt, đảo 1–2 phút cho cần tây vừa mềm. Cho mực trở lại đảo 30 giây, rắc tiêu và dọn.'
    ],[
      'Clean squid by removing the quill, ink sac, eyes, and beak; rinse briefly, pat dry, score the inside, and cut into 1 cm rings. Cut celery into 4 cm lengths, onion into wedges, and tomato into small wedges.',
      'Mix oyster sauce and fish sauce with 2 tablespoons water. Heat oil in a wok and sauté garlic until fragrant.',
      'Stir-fry squid over high heat for 1–2 minutes until opaque; remove promptly. Stir-fry onion and tomato for 2 minutes.',
      'Add celery and sauce; toss 1–2 minutes until just tender. Return squid for 30 seconds, add pepper, and serve.'
    ]),
    'shrimp-broccoli':rec(['tôm|shrimp|g|300','bông cải xanh|broccoli|g|250','cà rốt|carrot|g|80','tỏi|garlic|g|12','dầu hào|oyster sauce|ml|12','nước tương|soy sauce|ml|8','dầu ăn|cooking oil|ml|12','bột bắp|cornstarch|g|5','nước lọc|water|ml|60'],[
      'Bóc vỏ tôm, rút chỉ lưng, rửa nhanh và thấm khô. Tách bông cải nhánh nhỏ; gọt cà rốt thái lát xéo. Hòa bột bắp với 60 ml nước, trộn cùng dầu hào và nước tương.',
      'Trụng bông cải trong nước sôi 1 phút rồi để ráo. Làm nóng chảo với dầu, phi tỏi 10 giây.',
      'Xào tôm 1–2 phút đến khi hồng và đục, gắp ra. Xào cà rốt 2 phút, thêm bông cải đảo thêm 1 phút.',
      'Cho tôm trở lại, rót sốt bột bắp và đảo đến khi sốt trong sánh nhẹ, tôm đục hoàn toàn. Dọn ngay.'
    ],[
      'Peel and devein shrimp, rinse briefly, and pat dry. Separate broccoli into small florets and diagonally slice carrot. Mix cornstarch with 60 ml water, oyster sauce, and soy sauce.',
      'Blanch broccoli in boiling water for 1 minute and drain. Heat oil in a wok and sizzle garlic for 10 seconds.',
      'Stir-fry shrimp 1–2 minutes until pink and opaque, then remove. Stir-fry carrot 2 minutes and add broccoli for 1 minute.',
      'Return shrimp, pour in the starch sauce, and toss until clear and lightly thickened and shrimp are fully opaque. Serve promptly.'
    ]),
    'seafood-veg-stirfry':rec(['tôm|shrimp|g|180','mực ống|squid|g|180','bông cải xanh|broccoli|g|150','ớt chuông|bell pepper|g|100','cà rốt|carrot|g|100','hành tây|onion|g|80','tỏi|garlic|g|12','dầu hào|oyster sauce|ml|15','nước mắm|fish sauce|ml|10','dầu ăn|cooking oil|ml|15','bột bắp|cornstarch|g|6','nước lọc|water|ml|60'],[
      'Bóc vỏ, rút chỉ tôm; sơ chế mực bỏ mai, túi mực, mắt và răng. Rửa nhanh hải sản, thấm khô. Tách bông cải; thái cà rốt, ớt chuông và hành tây miếng vừa ăn.',
      'Hòa dầu hào, nước mắm, bột bắp và 60 ml nước. Trụng bông cải 1 phút, vớt ráo. Làm nóng chảo với dầu, phi tỏi thơm.',
      'Xào tôm 1–2 phút đến hồng đục; xào mực riêng 1–2 phút đến trắng đục. Gắp cả hai ra để tránh dai.',
      'Xào cà rốt và hành tây 2 phút, thêm ớt chuông và bông cải. Rót sốt, đảo đến sánh; cho tôm mực trở lại đảo nóng 30 giây rồi dọn.'
    ],[
      'Peel and devein shrimp; clean squid by removing quill, ink sac, eyes, and beak. Rinse seafood briefly and pat dry. Separate broccoli and cut carrot, bell pepper, and onion into bite-size pieces.',
      'Mix oyster sauce, fish sauce, cornstarch, and 60 ml water. Blanch broccoli 1 minute and drain. Heat oil in a wok and sauté garlic until fragrant.',
      'Stir-fry shrimp 1–2 minutes until pink and opaque; stir-fry squid separately 1–2 minutes until opaque. Remove both promptly to keep them tender.',
      'Stir-fry carrot and onion 2 minutes, add bell pepper and broccoli, then pour in sauce and toss until glossy. Return seafood for 30 seconds until hot and serve.'
    ]),
    'meal-goi-cuon':rec(['bánh tráng|rice paper|cái|10','tôm|shrimp|g|250','thịt heo|pork loin|g|250','bún tươi|fresh rice vermicelli|g|250','xà lách|lettuce|g|100','húng lủi|spearmint|g|20','hẹ|garlic chives|g|15','dưa leo|cucumber|g|120','nước mắm|fish sauce|ml|30','chanh|lime|quả|1','đường|sugar|g|12','tỏi|garlic|g|8','ớt đỏ|red chili|quả|1','nước lọc|water|ml|60'],[
      'Đun nồi nước nhỏ. Luộc thịt heo nguyên miếng 20–25 phút; đo tâm đạt 63°C, vớt ra để nghỉ ít nhất 3 phút rồi thái lát mỏng. Luộc tôm 2–3 phút đến hồng đục, để nguội và bổ dọc.',
      'Luộc bún theo hướng dẫn gói, xả ráo. Rửa xà lách, húng lủi, hẹ và dưa leo; thái dưa leo que dài. Pha nước mắm với nước cốt chanh, đường, tỏi, ớt và 60 ml nước ấm.',
      'Nhúng nhanh từng bánh tráng qua nước sạch hoặc làm ẩm bằng khăn sạch. Đặt xà lách, bún, dưa leo, húng lủi, hẹ, thịt và tôm ở 1/3 dưới bánh.',
      'Gấp hai mép bên vào, cuộn chặt từ dưới lên; xếp mặt tôm ra ngoài cho đẹp. Cuốn từng chiếc, dùng trong ngày và chấm nước mắm chua ngọt.'
    ],[
      'Bring a small pot of water to a simmer. Cook the pork whole for 20–25 minutes; check the center reaches 63°C, rest at least 3 minutes, then slice thinly. Boil shrimp 2–3 minutes until pink and opaque; cool and halve lengthwise.',
      'Cook vermicelli according to the package and drain. Rinse lettuce, spearmint, chives, and cucumber; cut cucumber into batons. Mix fish sauce with lime juice, sugar, garlic, chili, and 60 ml warm water.',
      'Quickly dip each rice-paper sheet in clean water or dampen it with a clean cloth. Place lettuce, noodles, cucumber, mint, chives, pork, and shrimp across the lower third.',
      'Fold both sides inward and roll snugly from the bottom; position shrimp on the outside for color. Roll one at a time, serve the same day, and dip in the sweet-sour fish sauce.'
    ]),
    'meal-pork-rice-paper-rolls':rec(['bánh tráng|rice paper|cái|10','thịt ba chỉ|pork belly|g|350','bún tươi|fresh rice vermicelli|g|250','xà lách|lettuce|g|100','húng lủi|spearmint|g|20','tía tô|perilla|g|15','dưa leo|cucumber|g|120','thơm|pineapple|g|80','mắm nêm|fermented anchovy dipping sauce|ml|80','tỏi|garlic|g|8','chanh|lime|quả|1','đường|sugar|g|8','ớt đỏ|red chili|quả|1','gừng|ginger|g|15','muối|salt|g|3','nước lọc|water|ml|45'],[
      'Đun nồi nước với muối và vài lát gừng đến sôi nhẹ. Cho ba chỉ vào, hạ lửa liu riu 35–45 phút; đo tâm đạt ít nhất 63°C. Để nghỉ 3 phút rồi thái lát mỏng.',
      'Luộc bún theo hướng dẫn gói, để ráo. Rửa xà lách, húng lủi, tía tô và dưa leo; thái dưa leo que dài. Băm nhỏ thơm, tỏi và ớt.',
      'Pha mắm nêm với thơm, tỏi, ớt, đường, nước cốt chanh và 2–3 thìa canh nước ấm; nếm chỉnh mặn ngọt. Nhúng nhanh từng bánh tráng cho mềm dẻo.',
      'Xếp xà lách, rau thơm, dưa leo, bún và thịt lên bánh tráng. Gấp hai mép rồi cuộn chặt; dọn ngay với mắm nêm.'
    ],[
      'Bring water with the listed salt and ginger slices to a simmer. Add pork, lower the heat, and simmer 35–45 minutes; check the center reaches at least 63°C. Rest 3 minutes, then slice thinly.',
      'Cook vermicelli according to the package and drain. Rinse lettuce, spearmint, perilla, and cucumber; cut cucumber into batons. Finely chop pineapple, garlic, and chili.',
      'Mix fermented anchovy sauce with pineapple, garlic, chili, sugar, lime juice, and 2–3 tablespoons warm water; adjust to taste. Briefly dip each rice-paper sheet until pliable.',
      'Layer lettuce, herbs, cucumber, noodles, and pork on the rice paper. Fold both sides and roll snugly; serve promptly with the fermented anchovy dip.'
    ])
  };
})();
