// Traductions pour les emails
export const emailTranslations = {
  fr: {
    // Traductions pour l'email de confirmation de paiement
    subject: 'Confirmation de votre paiement Womi',
    thankYou: 'Merci pour votre achat !', 
    greeting: 'Bonjour',
    confirmPurchase: 'Nous confirmons votre achat de',
    accessReports: 'Vous avez maintenant accès à',
    reportsLabel: 'rapport(s)',
    additionalOn: 'supplémentaire(s) sur votre compte.',
    viewReports: 'Pour consulter vos rapports :',
    dashboardButton: 'Accéder à mon tableau de bord',
    questions: "Si vous avez des questions concernant votre achat, n'hésitez pas à contacter notre équipe de support.",
    thankYouTrust: 'Merci de votre confiance,',
    teamSignature: "L'équipe Womi",
    rightsReserved: 'Tous droits réservés.',
    
    // Traductions pour l'email de bienvenue
    welcomeSubject: 'Bienvenue sur Womi !',
    welcomeTitle: 'Bienvenue sur Womi !',
    welcomeIntro: 'Nous sommes ravis de vous accueillir sur Womi, votre outil de validation d\'idées business.',
    accountCreated: 'Votre compte a été créé avec succès.',
    getStarted: 'Pour commencer à valider vos idées :',
    startButton: 'Commencer maintenant',
    howItWorks: 'Comment ça marche ?',
    howItWorksSteps: [
      '1. Décrivez votre idée de business',
      '2. Notre IA analyse votre idée sous tous les angles',
      '3. Obtenez un rapport détaillé avec un score de validation',
      '4. Prenez des décisions éclairées basées sur ces analyses'
    ],
    needHelp: 'Besoin d\'aide ?',
    helpText: 'Si vous avez des questions ou besoin d\'assistance, n\'hésitez pas à contacter notre équipe support.',
    contactSupport: 'Contacter le support',
  },
  en: {
    // Traductions pour l'email de confirmation de paiement
    subject: 'Confirmation of your Womi payment',
    thankYou: 'Thank you for your purchase!',
    greeting: 'Hello',
    confirmPurchase: 'We confirm your purchase of',
    accessReports: 'You now have access to',
    reportsLabel: 'additional report(s)',
    additionalOn: 'on your account.',
    viewReports: 'To view your reports:',
    dashboardButton: 'Access my dashboard',
    questions: 'If you have any questions about your purchase, do not hesitate to contact our support team.',
    thankYouTrust: 'Thank you for your trust,',
    teamSignature: 'The Womi Team',
    rightsReserved: 'All rights reserved.',
    
    // Traductions pour l'email de bienvenue
    welcomeSubject: 'Welcome to Womi!',
    welcomeTitle: 'Welcome to Womi!',
    welcomeIntro: 'We are excited to welcome you to Womi, your business idea validation tool.',
    accountCreated: 'Your account has been successfully created.',
    getStarted: 'To start validating your ideas:',
    startButton: 'Get started now',
    howItWorks: 'How it works?',
    howItWorksSteps: [
      '1. Describe your business idea',
      '2. Our AI analyzes your idea from all angles',
      '3. Get a detailed report with a validation score',
      '4. Make informed decisions based on these analyses'
    ],
    needHelp: 'Need help?',
    helpText: 'If you have any questions or need assistance, feel free to contact our support team.',
    contactSupport: 'Contact support',
  }
};

// Template d'email pour la confirmation de paiement
export const getPaymentConfirmationTemplate = (
  userName: string,
  productName: string,
  numReports: number,
  language: 'fr' | 'en' = 'fr'
) => {
  // Utiliser les traductions correspondantes à la langue
  const t = emailTranslations[language];

  return {
    subject: t.subject,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
        <img src="http://www.womi-validateidea.com/icon/logo.png" alt="Womi Logo" style="display: block; margin: 0 auto 20px; max-width: 150px;">
        <h1 style="color: #333; text-align: center;">${t.thankYou}</h1>
        <p style="font-size: 16px; line-height: 1.5; color: #666;">${t.greeting} ${userName},</p>
        <p style="font-size: 16px; line-height: 1.5; color: #666;">${t.confirmPurchase} <strong>${productName}</strong>.</p>
        <p style="font-size: 16px; line-height: 1.5; color: #666;">${t.accessReports} <strong>${numReports} ${t.reportsLabel}</strong> ${t.additionalOn}</p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="font-size: 14px; margin: 0; color: #666;">${t.viewReports}</p>
          <a href="http://www.womi-validateidea.com/${language}/app" style="display: inline-block; background-color: #4F46E5; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; margin-top: 10px; font-weight: bold;">${t.dashboardButton}</a>
        </div>
        <p style="font-size: 16px; line-height: 1.5; color: #666;">${t.questions}</p>
        <p style="font-size: 16px; line-height: 1.5; color: #666;">${t.thankYouTrust}</p>
        <p style="font-size: 16px; line-height: 1.5; color: #666;">${t.teamSignature}</p>
        <hr style="border: none; height: 1px; background-color: #eaeaea; margin: 20px 0;">
        <p style="font-size: 12px; color: #999; text-align: center;">© ${new Date().getFullYear()} Womi. ${t.rightsReserved}</p>
      </div>
    `,
    text: `${t.greeting} ${userName},
    
${t.confirmPurchase} ${productName}.

${t.accessReports} ${numReports} ${t.reportsLabel} ${t.additionalOn}

${t.viewReports} http://www.womi-validateidea.com/${language}/app

${t.questions}

${t.thankYouTrust}
${t.teamSignature}
`,
  };
};

// Template d'email de bienvenue
export const getWelcomeEmailTemplate = (
  userName: string,
  isNewUser: boolean = true,
  language: 'fr' | 'en' = 'fr'
) => {
  // Utiliser les traductions correspondantes à la langue
  const t = emailTranslations[language];

  return {
    subject: t.welcomeSubject,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
        <img src="http://www.womi-validateidea.com/icon/logo.png" alt="Womi Logo" style="display: block; margin: 0 auto 20px; max-width: 150px;">
        <h1 style="color: #333; text-align: center;">${t.welcomeTitle}</h1>
        <p style="font-size: 16px; line-height: 1.5; color: #666;">${t.greeting} ${userName},</p>
        <p style="font-size: 16px; line-height: 1.5; color: #666;">${t.welcomeIntro}</p>
        ${isNewUser ? `<p style="font-size: 16px; line-height: 1.5; color: #666;">${t.accountCreated}</p>` : ''}
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="font-size: 14px; margin: 0; color: #666;">${t.getStarted}</p>
          <a href="http://www.womi-validateidea.com/${language}/app" style="display: inline-block; background-color: #4F46E5; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; margin-top: 10px; font-weight: bold;">${t.startButton}</a>
        </div>
        
        <div style="margin: 30px 0;">
          <h2 style="color: #333; font-size: 18px;">${t.howItWorks}</h2>
          <ul style="padding-left: 20px;">
            ${t.howItWorksSteps.map(step => `<li style="margin-bottom: 10px; color: #666;">${step}</li>`).join('')}
          </ul>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h2 style="color: #333; font-size: 18px;">${t.needHelp}</h2>
          <p style="font-size: 14px; color: #666;">${t.helpText}</p>
          <a href="mailto:support@womi-validateidea.com" style="display: inline-block; background-color: #4F46E5; color: white; text-decoration: none; padding: 8px 15px; border-radius: 5px; margin-top: 10px; font-weight: bold;">${t.contactSupport}</a>
        </div>
        
        <p style="font-size: 16px; line-height: 1.5; color: #666;">${t.thankYouTrust}</p>
        <p style="font-size: 16px; line-height: 1.5; color: #666;">${t.teamSignature}</p>
        <hr style="border: none; height: 1px; background-color: #eaeaea; margin: 20px 0;">
        <p style="font-size: 12px; color: #999; text-align: center;">© ${new Date().getFullYear()} Womi. ${t.rightsReserved}</p>
      </div>
    `,
    text: `${t.greeting} ${userName},

${t.welcomeIntro}
${isNewUser ? t.accountCreated : ''}

${t.getStarted}
http://www.womi-validateidea.com/${language}/app

${t.howItWorks}
${t.howItWorksSteps.join('\n')}

${t.needHelp}
${t.helpText}
support@womi-validateidea.com

${t.thankYouTrust}
${t.teamSignature}
`,
  };
}; 