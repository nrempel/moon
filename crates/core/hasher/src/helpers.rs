use crate::hasher::Hasher;
use moon_error::MoonError;
use moon_utils::path;
use rustc_hash::FxHashSet;
use sha2::{Digest, Sha256};
use std::collections::BTreeMap;
use std::path::{Path, PathBuf};

pub fn to_hash(hasher: &impl Hasher) -> String {
    let mut sha = Sha256::new();

    hasher.hash(&mut sha);

    format!("{:x}", sha.finalize())
}

pub fn hash_btree(tree: &BTreeMap<String, String>, sha: &mut Sha256) {
    for (k, v) in tree {
        sha.update(k.as_bytes());
        sha.update(v.as_bytes());
    }
}

pub fn hash_vec(list: &Vec<String>, sha: &mut Sha256) {
    for v in list {
        sha.update(v.as_bytes());
    }
}

pub fn convert_paths_to_strings(
    paths: &FxHashSet<PathBuf>,
    workspace_root: &Path,
) -> Result<Vec<String>, MoonError> {
    let mut files: Vec<String> = vec![];

    for path in paths {
        // Inputs may not exist and `git hash-object` will fail if you pass an unknown file
        if path.exists() {
            // We also need to use relative paths from the workspace root,
            // so that it works across machines
            let rel_path = if path.starts_with(workspace_root) {
                path.strip_prefix(workspace_root).unwrap()
            } else {
                path
            };

            files.push(path::to_string(rel_path)?);
        }
    }

    Ok(files)
}
