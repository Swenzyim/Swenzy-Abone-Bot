module.exports = {
  // Bot configuration
  token: "Bot-Token", // Your bot token (stored in .env file)
  prefix: "!", // Command prefix
  
  // Channel configuration
  channelId: "Kanal-ID", // The ID of the channel where photos will be monitored
  
  // Role configuration
  roleId: "Abone-Rol-ID", // The ID of the role to be assigned to subscribers
  
  // Authorized roles that can approve/reject subscribers
  authorizedRoleIds: ["Yetkili-ID"], // Array of role IDs that can approve/reject
  
  // Emoji configuration
  approveEmoji: "✅", // Emoji for approval
  rejectEmoji: "❎", // Emoji for rejection
  
  // Messages
  approveMessage: "Abone rolün verildi!",
  rejectMessage: "Abone rolün verilmedi! Lütfen tekrar dene."
};