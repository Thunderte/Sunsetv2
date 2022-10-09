const {MessageEmbed, Message, Client, MessageActionRow, MessageButton} = require('discord.js');

module.exports = {
    name: "embed",
    description: 'Envie uma embed a um chat especifico',
    options: [],  run: async (client, interaction) => {

    if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        interaction.reply(`Você não pode executar esse comando`)
    } else {
        let embed_1 = new MessageEmbed()
            .setAuthor({
                name: 'Sunset Music',
                iconURL: 'https://media.discordapp.net/attachments/929125716094746624/1008884528355495967/7P8sfaD.png'
            })
            .setColor("#FFC280")
            .setDescription(`Qual o chat para enviar o embed?`);

        let embed_erro = new MessageEmbed()
            .setAuthor({
                name: 'Sunset Music',
                iconURL: 'https://media.discordapp.net/attachments/929125716094746624/1008884528355495967/7P8sfaD.png'
            })
            .setColor("#FFC280")
            .setDescription(`Não foi possivel reconhecer o canal!`);

        let embed_2 = new MessageEmbed()
            .setAuthor({
                name: 'Sunset Music',
                iconURL: 'https://media.discordapp.net/attachments/929125716094746624/1008884528355495967/7P8sfaD.png'
            })
            .setColor("#FFC280")
            .setDescription(`${interaction.author} Qual será o título do anúncio?`);

        let embed_i = new MessageEmbed()
            .setAuthor({
                name: 'Sunset Music',
                iconURL: 'https://media.discordapp.net/attachments/929125716094746624/1008884528355495967/7P8sfaD.png'
            })
            .setColor("#FFC280")
            .setDescription(`${interaction.author} Qual será a imagem do embed? Caso não queira use essa https://i.imgur.com/ZwLaa1O.png`);
        let embed_t = new MessageEmbed()
            .setAuthor({
                name: 'Sunset Music',
                iconURL: 'https://media.discordapp.net/attachments/929125716094746624/1008884528355495967/7P8sfaD.png'
            })
            .setColor("#FFC280")
            .setDescription(`${interaction.author} Qual será a thumbnail do embed? Caso não queira use essa https://i.imgur.com/ZwLaa1O.png`);
        let embed_if = new MessageEmbed()
            .setAuthor({
                name: 'Sunset Music',
                iconURL: 'https://media.discordapp.net/attachments/929125716094746624/1008884528355495967/7P8sfaD.png'
            })
            .setColor("#FFC280")
            .setDescription(`${interaction.author} Qual será a imagem footer do embed? Caso não queira use essa https://i.imgur.com/ZwLaa1O.png`);

        let embed_footer = new MessageEmbed()
            .setAuthor({
                name: 'Sunset Music',
                iconURL: 'https://media.discordapp.net/attachments/929125716094746624/1008884528355495967/7P8sfaD.png'
            })
            .setColor("#FFC280")
            .setDescription(`${interaction.author} Qual o footer do embed?`);

        let embed_men = new MessageEmbed()
            .setAuthor({
                name: 'Sunset Music',
                iconURL: 'https://media.discordapp.net/attachments/929125716094746624/1008884528355495967/7P8sfaD.png'
            })
            .setColor("#FFC280")
            .setDescription(`${interaction.author} Deseja mencionar todos? sim ou não`);

        let embed_3 = new MessageEmbed()
            .setAuthor({
                name: 'Sunset Music',
                iconURL: 'https://media.discordapp.net/attachments/929125716094746624/1008884528355495967/7P8sfaD.png'
            })
            .setColor("#FFC280")
            .setDescription(`${interaction.author} Qual será a descrição do anúncio?`);


        //cor do embed
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('amarelo')
                    .setLabel('Amarelo')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('azul')
                    .setLabel('Azul')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('rosa')
                    .setLabel('Rosa')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('laranja')
                    .setLabel('Laranja')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('branco')
                    .setLabel('Branco')
                    .setStyle('SECONDARY'),
            );

        //confirma embed
        const row2 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('aceito')
                    .setLabel('')
                    .setEmoji('✅')
                    .setStyle('SUCCESS'),
                new MessageButton()
                    .setCustomId('recuso')
                    .setLabel('')
                    .setEmoji('❌')
                    .setStyle('DANGER'),

                new MessageButton()
                    .setCustomId('men_todos')
                    .setLabel('')
                    .setEmoji('⚠️')
                    .setStyle('PRIMARY')
            );


        let embed_cor = new MessageEmbed()
            .setAuthor({
                name: 'Sunset Music',
                iconURL: 'https://media.discordapp.net/attachments/929125716094746624/1008884528355495967/7P8sfaD.png'
            })
            .setColor("#FFC280")
            .setDescription(`${interaction.author} Qual a cor do embed?`);

        interaction.reply({embeds: [embed_1]}).then(msg => {
            let coletor_1 = interaction.channel.createMessageCollector({
                filter: mm => mm.author.id == interaction.user.id,
                max: 1
            });

            coletor_1.on("collect", (palavra_1) => {
                interaction.channel.bulkDelete(1);
                let chat = palavra_1.mentions.channels.first() || interaction.guild.channels.cache.get(palavra_1.content);

                if (!chat) {
                    msg.edit({embeds: [embed_erro]})
                } else {
                    if (chat) {
                        interaction.reply({embeds: [embed_2]}).then(m_2 => {

                            let coletor_2 = interaction.channel.createMessageCollector({
                                filter: mm => mm.author.id == interaction.user.id,
                                max: 1
                            });

                            coletor_2.on("collect", (palavra_2) => {
                                interaction.channel.bulkDelete(1);
                                let titulo = palavra_2.content;

                                let coletor_3 = interaction.channel.createMessageCollector({
                                    filter: mm => mm.author.id == interaction.user.id,
                                    max: 1
                                });

                                m_2.edit({embeds: [embed_3]}).then(m_3 => {
                                    coletor_3.on("collect", (palavra_3) => {
                                        interaction.channel.bulkDelete(1);
                                        let desc = palavra_3.content;

                                        let coletor_5 = interaction.channel.createMessageCollector({
                                            filter: mm => mm.author.id == interaction.user.id,
                                            max: 1
                                        });

                                        m_3.edit({embeds: [embed_t]}).then(m_5 => {
                                            coletor_5.on("collect", (palavra_5) => {
                                                interaction.channel.bulkDelete(1);
                                                let thumb = palavra_5.content;

                                                let coletor_6 = interaction.channel.createMessageCollector({
                                                    filter: mm => mm.author.id == interaction.user.id,
                                                    max: 1
                                                });
                                                m_5.edit({embeds: [embed_i]}).then(m_6 => {
                                                    coletor_6.on("collect", (palavra_6) => {
                                                        interaction.channel.bulkDelete(1);
                                                        let image = palavra_6.content;

                                                        let coletor_7 = interaction.channel.createMessageCollector({
                                                            filter: mm => mm.author.id == interaction.user.id,
                                                            max: 1
                                                        });
                                                        m_6.edit({embeds: [embed_if]}).then(m_7 => {
                                                            coletor_7.on("collect", (palavra_7) => {
                                                                interaction.channel.bulkDelete(1);
                                                                let imagef = palavra_7.content;

                                                                let coletor_8 = interaction.channel.createMessageCollector({
                                                                    filter: mm => mm.author.id == interaction.user.id,
                                                                    max: 1
                                                                });
                                                                m_7.edit({embeds: [embed_footer]}).then(m_7 => {
                                                                    coletor_8.on("collect", (palavra_8) => {
                                                                        interaction.channel.bulkDelete(1);
                                                                        let footer = palavra_8.content;


                                                                        m_7.edit({
                                                                            embeds: [embed_cor],
                                                                            components: [row]
                                                                        }).then(m_4 => {

                                                                            const iFilter = i => i.user.id === interaction.user.id;

                                                                            const collector = m_4.createMessageComponentCollector({
                                                                                filter: iFilter,
                                                                                time: 10 * 60000
                                                                            });

                                                                            collector.on('collect', async (i) => {
                                                                                let embed = new MessageEmbed()
                                                                                    .setAuthor({
                                                                                        name: `Você deseja enviar o seguinte embed para ${chat} ? Caso deseje enviar e queira mencionar todos clique no botão ⚠️!`,
                                                                                        iconURL: ''
                                                                                    })
                                                                                    .setTitle(titulo)
                                                                                    .setDescription(desc)
                                                                                    .setColor('#FDDD7F')
                                                                                    .setThumbnail(thumb)
                                                                                    .setImage(image)
                                                                                    .setFooter({
                                                                                        text: `${footer}`,
                                                                                        iconURL: `${imagef}`
                                                                                    })

                                                                                let embedama = new MessageEmbed()
                                                                                    .setTitle(titulo)
                                                                                    .setDescription(desc)
                                                                                    .setColor('#FDDD7F')
                                                                                    .setThumbnail(thumb)
                                                                                    .setImage(image)
                                                                                    .setFooter({
                                                                                        text: `${footer}`,
                                                                                        iconURL: `${imagef}`
                                                                                    })
                                                                                let embedazul = new MessageEmbed()
                                                                                    .setTitle(titulo)
                                                                                    .setDescription(desc)
                                                                                    .setColor('#63C7E2')
                                                                                    .setThumbnail(thumb)
                                                                                    .setImage(image)
                                                                                    .setFooter({
                                                                                        text: `${footer}`,
                                                                                        iconURL: `${imagef}`
                                                                                    })
                                                                                let embedrosa = new MessageEmbed()
                                                                                    .setTitle(titulo)
                                                                                    .setDescription(desc)
                                                                                    .setColor('#FFD6FD')
                                                                                    .setThumbnail(thumb)
                                                                                    .setImage(image)
                                                                                    .setFooter({
                                                                                        text: `${footer}`,
                                                                                        iconURL: `${imagef}`
                                                                                    })
                                                                                let embedlara = new MessageEmbed()
                                                                                    .setTitle(titulo)
                                                                                    .setDescription(desc)
                                                                                    .setColor('#FFC280')
                                                                                    .setThumbnail(thumb)
                                                                                    .setImage(image)
                                                                                    .setFooter({
                                                                                        text: `${footer}`,
                                                                                        iconURL: `${imagef}`
                                                                                    })
                                                                                let embedbranco = new MessageEmbed()
                                                                                    .setTitle(titulo)
                                                                                    .setDescription(desc)
                                                                                    .setColor('#FFFFFF')
                                                                                    .setThumbnail(thumb)
                                                                                    .setImage(image)
                                                                                    .setFooter({
                                                                                        text: `${footer}`,
                                                                                        iconURL: `${imagef}`
                                                                                    })

                                                                                i.deferUpdate()
                                                                                switch (i.customId) {
                                                                                    case `amarelo`:
                                                                                        m_4.edit({
                                                                                            embeds: [embed],
                                                                                            components: [row2]
                                                                                        }).then(m_10 => {

                                                                                            const iFilter = i => i.user.id === interaction.user.id;

                                                                                            const collector1 = m_4.createMessageComponentCollector({
                                                                                                filter: iFilter,
                                                                                                time: 10 * 60000
                                                                                            });

                                                                                            collector1.on('collect', async (i2) => {
                                                                                                if (i2.customId == 'aceito') {
                                                                                                    chat.send({embeds: [embedama]})
                                                                                                    m_4.edit('Embed enviada com sucesso')
                                                                                                } else if (i2.customId == 'recuso') {
                                                                                                    m_10.edit('Embed recusada com sucesso')
                                                                                                }
                                                                                                else if (i2.customId == 'men_todos') {
                                                                                                    chat.send('@everyone')
                                                                                                    chat.send({embeds: [embedazul]})
                                                                                                    m_10.edit('Embed enviada com sucesso e todos foram mencionados!')
                                                                                                }
                                                                                            })
                                                                                        })
                                                                                        break;

                                                                                    case 'azul':
                                                                                        m_4.edit({
                                                                                            embeds: [embed],
                                                                                            components: [row2]
                                                                                        }).then(m_10 => {

                                                                                            const iFilter = i => i.user.id === interaction.user.id;

                                                                                            const collector2 = m_4.createMessageComponentCollector({
                                                                                                filter: iFilter,
                                                                                                time: 10 * 60000
                                                                                            });

                                                                                            collector2.on('collect', async (i2) => {
                                                                                                if (i2.customId == 'aceito') {
                                                                                                    chat.send({embeds: [embedazul]})
                                                                                                    m_4.edit('Embed enviada com sucesso')
                                                                                                } else if (i2.customId == 'recuso') {
                                                                                                    m_10.edit('Embed recusada com sucesso')
                                                                                                }
                                                                                                else if (i2.customId == 'men_todos') {
                                                                                                    chat.send('@everyone')
                                                                                                    chat.send({embeds: [embedazul]})
                                                                                                    m_10.edit('Embed enviada com sucesso e todos foram mencionados!')
                                                                                                }
                                                                                            })
                                                                                        })
                                                                                        break;
                                                                                    case 'rosa':
                                                                                        m_4.edit({
                                                                                            embeds: [embed],
                                                                                            components: [row2]
                                                                                        }).then(m_10 => {

                                                                                            const iFilter = i => i.user.id === interaction.user.id;

                                                                                            const collector3 = m_4.createMessageComponentCollector({
                                                                                                filter: iFilter,
                                                                                                time: 10 * 60000
                                                                                            });

                                                                                            collector3.on('collect', async (i2) => {
                                                                                                if (i2.customId == 'aceito') {
                                                                                                    chat.send({embeds: [embedrosa]})
                                                                                                    m_10.edit('Embed enviada com sucesso')
                                                                                                } else if (i2.customId == 'recuso') {
                                                                                                    m_10.edit('Embed recusada com sucesso')
                                                                                                }
                                                                                                else if (i2.customId == 'men_todos') {
                                                                                                    chat.send('@everyone')
                                                                                                    chat.send({embeds: [embedazul]})
                                                                                                    m_10.edit('Embed enviada com sucesso e todos foram mencionados!')
                                                                                                }
                                                                                            })
                                                                                        })
                                                                                        break;

                                                                                    case 'laranja':
                                                                                        m_4.edit({
                                                                                            embeds: [embed],
                                                                                            components: [row2]
                                                                                        }).then(m_10 => {

                                                                                            const iFilter = i => i.user.id === interaction.user.id;

                                                                                            const collector4 = m_4.createMessageComponentCollector({
                                                                                                filter: iFilter,
                                                                                                time: 10 * 60000
                                                                                            });

                                                                                            collector4.on('collect', async (i2) => {
                                                                                                if (i2.customId == 'aceito') {
                                                                                                    chat.send({embeds: [embedlara]})
                                                                                                    m_4.edit('Embed enviada com sucesso')
                                                                                                } else if (i2.customId == 'recuso') {
                                                                                                    m_10.edit('Embed recusada com sucesso')
                                                                                                }
                                                                                                else if (i2.customId == 'men_todos') {
                                                                                                    chat.send('@everyone')
                                                                                                    chat.send({embeds: [embedazul]})
                                                                                                    m_10.edit('Embed enviada com sucesso e todos foram mencionados!')
                                                                                                }
                                                                                            })
                                                                                        })
                                                                                        break;
                                                                                    case 'branco':
                                                                                        m_4.edit({
                                                                                            embeds: [embed],
                                                                                            components: [row2]
                                                                                        }).then(m_10 => {

                                                                                            const iFilter = i => i.user.id === interaction.user.id;

                                                                                            const collector5 = m_4.createMessageComponentCollector({
                                                                                                filter: iFilter,
                                                                                                time: 10 * 60000
                                                                                            });

                                                                                            collector5.on('collect', async (i2) => {
                                                                                                if (i2.customId == 'aceito') {
                                                                                                    chat.send({embeds: [embedbranco]})
                                                                                                    m_10.edit('Embed enviada com sucesso')
                                                                                                } else if (i2.customId == 'recuso') {
                                                                                                    m_10.edit('Embed recusada com sucesso')
                                                                                                }
                                                                                                else if (i2.customId == 'men_todos') {
                                                                                                    chat.send('@everyone')
                                                                                                    chat.send({embeds: [embedazul]})
                                                                                                    m_10.edit('Embed enviada com sucesso e todos foram mencionados!')
                                                                                                }
                                                                                            })
                                                                                        })
                                                                                        break;

                                                                                }

                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    }
                }
            })
        })
}}}





