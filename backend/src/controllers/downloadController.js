const Download = require('../models/Download');

// In a real application, you would have a more sophisticated way to manage file versions and links,
// possibly integrating with a cloud storage service like AWS S3.
const fileRegistry = {
  Windows: {
    '1.0.0': 'https://cdn.balshub.com/v1.0.0/bals-hub-setup.exe',
    '1.0.1': 'https://cdn.balshub.com/v1.0.1/bals-hub-setup.exe'
  },
  Mac: {
    '1.0.0': 'https://cdn.balshub.com/v1.0.0/bals-hub.dmg',
    '1.0.1': 'https://cdn.balshub.com/v1.0.1/bals-hub.dmg'
  },
  Linux: {
    '1.0.0': 'https://cdn.balshub.com/v1.0.0/bals-hub.tar.gz',
    '1.0.1': 'https://cdn.balshub.com/v1.0.1/bals-hub.tar.gz'
  }
};

exports.getDownloadLink = async (req, res) => {
  const { platform, version } = req.body;
  const userId = req.user.id; // from auth middleware

  if (!platform || !version) {
    return res.status(400).json({ msg: 'Platform and version are required' });
  }

  const platformFiles = fileRegistry[platform];
  if (!platformFiles) {
    return res.status(404).json({ msg: 'Platform not found' });
  }

  const downloadLink = platformFiles[version];
  if (!downloadLink) {
    return res.status(404).json({ msg: 'Version not found for the specified platform' });
  }

  try {
    // Log the download event
    const newDownload = new Download({
      user: userId,
      platform,
      version
    });
    await newDownload.save();

    // Also update the user's download history
    // Note: This is now part of the Download model, so updating User directly might be redundant.
    // However, if you want a quick lookup on the user object, you can keep it.
    // For now, we'll rely on querying the Download collection.

    res.json({ downloadLink });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}; 