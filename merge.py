import os
import re

sta = []

def word_count(text):
    s = re.sub(r'```.*?```', '', text, flags=re.M)
    s = re.sub(r'\s', '', s, flags=re.M)
    return len(s)

def read_md(path):
    result = {}
    with open(path, 'r') as f:
        result['content'] = f.read()
        result["title"] = re.search(r"# (.*)\n", result['content'])[1]
    sta.append((result['title'], word_count(result['content'])))
    return result


def merge_chapter(chapter_dir_path):
    result = {"children": []}
    for dirpath, dirnames, filenames in os.walk(chapter_dir_path):
        # print(dirpath, dirnames, filenames)
        for filename in filenames:
            if filename.endswith(".md"):
                path = os.path.join(dirpath, filename)
                md = read_md(path)
                if filename == "README.md":
                    result['title'] = md['title']
                    result['content'] = md['content']
                else:
                    md['content'] = md['content'].replace("# ", "## ")
                    result["children"].append(md)
    
    result['children'] = sorted(result['children'], key=lambda x: x['title'])
    return result


def merge(docs_path):
    result = []
    dirpath, dirnames, filenames = list(os.walk(docs_path))[0]
    for dir in dirnames:
        if dir.startswith("."):
            continue
        result.append(merge_chapter(os.path.join(dirpath, dir)))
    result = sorted(result, key=lambda x: x['title'])
    text = ""
    for c in result:
        text += c['content'] + "\n"
        for child in c['children']:
            text += child["content"] + "\n"
    return text


if __name__ == "__main__":
    res = merge("docs")
    with open("merge3.md", "w") as f:
        f.write(res)
    print("\n".join(["{},{}".format(a, b) for a, b in sorted(sta)]))
